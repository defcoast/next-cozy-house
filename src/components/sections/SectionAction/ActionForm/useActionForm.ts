import {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/navigation';
import axios, {AxiosResponse} from 'axios';
import styles from '@/components/sections/SectionAction/SectionAction.module.scss';

const useActionForm = () => {
	/** Токен телеграм-бота. */
	const TOKEN: string   = '5812409585:AAEC2fidiPcKWhKj806clKbesDvpAUm9zmg';

	/** Идентификатор чата. */
	const CHAT_ID: string = '-1003317073401';

	/** Endpoint для отправки сообщения. */
	const URI_API: string = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

	/** Регулярное выражение номера телефона (Маска номера). */
	const reg: RegExp = /^\+?[78]\s\(9\d{2}\)\s\d{3}\s\d{2}-\d{2}$/;

	const refErrorMsg = useRef<HTMLElement | null>(null);

	const router = useRouter();

	/** Номер телефона заказчика. */
	const [tel, setTel] = useState('');

	/** Имя заказчика. */
	const [name, setName] = useState('');

	/** Сообщение об ошибке/успехе для пользователя (Валидация формы). */
	const [msg, setMsg] = useState('Введите корректный номер');


	/** @inheritDoc */
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent): void => {
			const excludedNumbers: string[]       = ['+', '+7 ', '8 '];
			const excludedNumbersMatched: boolean = excludedNumbers.some((excludedNumber: string): boolean => {
				return (excludedNumber === tel);
			});

			if ('Backspace' === event.key && excludedNumbersMatched) {
				setTel('');
			}
		}

		window.addEventListener('keydown', handleKeyDown);

		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [tel]);

	/** Обработчик отправки формы. */
	const handleSubmit = async (event: FormEvent<HTMLFormElement>, answers?: any): Promise<void> => {
		event.preventDefault();

		if ('' === tel) {
			return showErrorMsg('Поле не может быть пустым!');
		}

		if (null === tel.match(reg)) {
			return showErrorMsg('Введите корректный номер');
		}

		const message: string = generateTelegramMessage(name, tel, answers);

		try {
			const response: Promise<AxiosResponse> = axios.post(URI_API, {
				chat_id:    CHAT_ID,
				parse_mode: 'html',
				text:       message,
			});

			await response;
			setTel('');
			setName('');
			// showSuccessMsg('Запрос был успешно отправлен!');
			router.push('/thanks');
		}
		catch (err) {
			console.log('Ошибка отправки', err);
			showErrorMsg('Не удалось отправить :(');

			setTimeout((): void => {
				hideMsg();
			}, 5000);

		}
	};

	/** Обработчик изменения поля номера телефона заказчика. */
	const onChangeTel = (event: ChangeEvent<HTMLInputElement>): void => {
		const eventTarget: HTMLInputElement = event.target as HTMLInputElement;

		let clearTelValue: string            = getClearTel(eventTarget.value);
		const selectionStart: number | null  = eventTarget.selectionStart;
		let formattedInputValue;

		hideMsg();

		if (!Boolean(clearTelValue)) {
			setTel('');
		}

		if (tel.length !== selectionStart) {
			if (eventTarget.value && /\D/g.test(eventTarget.value)) {
				setTel(clearTelValue);
			}
		}

		// Российские номера телефонов.
		if (['7', '8', '9'].includes(clearTelValue[0])) {
			if ('9' === clearTelValue[0]) {
				clearTelValue = '7' + clearTelValue;
			}

			const firstSymbols: string = ('8' === clearTelValue[0]) ? '8' : '+7';

			formattedInputValue = firstSymbols + ' ';
			if (clearTelValue.length > 1) {
				formattedInputValue += '(' + clearTelValue.substring(1, 4);
			}

			if (clearTelValue.length >= 5) {
				formattedInputValue += ') ' + clearTelValue.substring(4, 7);
			}

			if (clearTelValue.length >= 8) {
				formattedInputValue += ' ' + clearTelValue.substring(7, 9);
			}

			if (clearTelValue.length >= 10) {
				formattedInputValue += '-' + clearTelValue.substring(9, 11);
			}
		}
		// Номера телефонов других стран.
		else {
			formattedInputValue = '+' + clearTelValue;
		}

		setTel(formattedInputValue);
	}

	/** Обработчик изменения поля имени заказчика. */
	const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
		const eventTarget: HTMLInputElement = event.target as HTMLInputElement;
		setName(eventTarget.value)
	};

	/**
	 * Показать сообщение об ошибке. (Ошибка валидации).
	 *
	 * @param message Сообщение об ошибке
	 *
	 * @return void
	 */
	const showErrorMsg = (message: string): void => {
		setMsg(message);

		const errorMsgElement: HTMLElement = refErrorMsg.current as HTMLElement ?? null;

		if (null === errorMsgElement) {
			return;
		}

		errorMsgElement.classList.add(styles.error);
		errorMsgElement.classList.add(styles.errorVisible);
	}

	/**
	 * Показать сообщение об успешной отправке.
	 *
	 * @param message Сообщение об ошибке
	 *
	 * @return void
	 */
	const showSuccessMsg = (message: string): void => {
		const errorMsgElement: HTMLElement = refErrorMsg.current as HTMLElement;
		errorMsgElement.classList.add(styles.success);
		errorMsgElement.classList.add(styles.successVisible);
		setMsg(message);
	}

	/**
	 * Скрыть сообщение об ошибке. (Ошибка валидации).
	 *
	 * @return void
	 */
	const hideMsg = (): void => {
		setMsg('');

		const errorMsgElement: HTMLElement = refErrorMsg.current as HTMLElement ?? null
		if (null === errorMsgElement) {
			return
		}
		errorMsgElement.classList.remove(styles.errorVisible);
	}

	/**
	 * Получить отформатированный номер телефона.
	 *
	 * @param  tel Номер телефона
	 *
	 * @return string
	 */
	const getFormatTel = (tel: string): string => {
		return (tel.startsWith('8') ? tel.replace(/^8/, '+7') : tel);

	}

	/**
	 * Получить "Чистый номер телефона" (Только цифры, без отступов и скобок).
	 *
	 * @param  tel Номер телефона
	 *
	 * @return string
	 */
	const getClearTel = (tel: string): string => {
		return tel.replace(/\D/g, '');
	}

	/**
	 * Сгенерировать сообщение в телеграм.
	 *
	 * @param  name Имя заказчика
	 * @param  tel  Номер телефона заказчика
	 *
	 * @return string todo ПОТОМ НУЖНО ТИПЫ СДЕЛАТЬ КОДА ТОЧНЫЕ ВОпроСЫ БУДУТ
	 */
	const generateTelegramMessage = (name: string, tel: string, otherData: any = {}): string => {
		let msg: string = `<b>Заявка с сайта!</b>\n\n`;
		msg += `<b>Имя:</b> ${name}\n`;
		msg += `<b>Номер телефона:</b> ${getFormatTel(tel)}\n\n`;

		if (0 === Object.keys(otherData).length) {
			return msg
		}

		console.log(otherData)

		msg += `<b>Площадь:</b> ${otherData[0]}\n`
		msg += `<b>Срочность:</b> ${otherData[1]}\n`
		msg += `<b>Тип работ:</b> ${otherData[2]}\n`
		msg += `<b>Тип помещения:</b> ${otherData[3]}\n`

		return msg;
	}

	return {
		handleSubmit,
		onChangeName,
		onChangeTel,
		name,
		msg,
		refErrorMsg,
		tel,
	}
}

export default useActionForm;
