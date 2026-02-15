'use client'

import {FC, useEffect, useRef, useState} from 'react';
import styles from './SectionFaq.module.scss';
import PaintedText from '@/components/common/PaintedText/PaintedText';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
import Wrapper from '@/components/common/Wrapper/Wrapper';

interface FAQItem {
	question: string;
	answer: string;
}

const faqData: FAQItem[] = [
	{
		question: 'Что такое механизированная штукатурка стен и в чем её преимущества?',
		answer: 'Механизированная штукатурка — это нанесение раствора с помощью специального оборудования. Она ложится ровнее, быстрее и качественнее, чем ручная: исключаются перепады в толщине слоя и повышается долговечность покрытия. Таким образом, качество получается выше, а стоимость ниже!'
	},
	{
		question: 'Что такое полусухая стяжка пола и в чем её преимущества?',
		answer: 'Полусухая стяжка пола — это способ выравнивания поверхности с использованием цементно-песчаной смеси с минимальным количеством воды, которая подаётся механизировано, равномерно распределяется по полу и затирается до идеально ровного состояния. Такой метод позволяет значительно сократить время высыхания, уменьшает риск появления трещин и усадки, исключает протечки воды к соседям и обеспечивает прочную, ровную основу под любое напольное покрытие, будь то плитка, ламинат или линолеум.'
	},
	{
		question: 'Какие материалы вы используете?',
		answer: 'Мы используем качественные, проверенные смеси от известных производителей: Knauf, Волма и Bergauf UNTER BAU'
	},
	{
		question: 'Где вы выполняете работы?',
		answer: 'Работаем во Владивостоке и Приморском крае.'
	},
	{
		question: 'Можно ли заказать только замер без обязательного выполнения работ?',
		answer: 'Да — выезд замерщика бесплатный, и вы получите точный расчёт стоимости без обязательств.'
	},
	{
		question: 'Сколько стоит механизированная штукатурка / полусухая стяжка?',
		answer: 'Цена рассчитывается индивидуально в зависимости от площади, состояния стен и типа поверхности. Ориентировочная ставка: от 1 000 ₽/м² за штукатруные работы. И от 850 ₽/м² за работы по стяжке. Материал уже включен в стоимость.'
	},
	{
		question: 'Как производится оплата?',
		answer: 'Оплата за работу производится после выполнения всех работ — вы платите только когда убедились в качестве результата.'
	},
	{
		question: 'Сколько времени занимает работа?',
		answer: 'Срок зависит от объёма — обычно от 1 до нескольких дней в зависимости от площади.'
	},
	{
		question: 'Даёте ли вы гарантию на выполненные работы?',
		answer: 'Да — гарантия на услуги 3 года, что подтверждает качество и долговечность покрытия.'
	},
	{
		question: 'Занимаетесь ли вы возведением перегородок?',
		answer: 'Да, мы выполняем возведение межкомнатных перегородок под ключ и рекомендуем заказывать перегородки вместе со штукатурными работами, чтобы весь комплекс был выполнен одной командой и в согласованные сроки.'
	},
	{
		question: 'Есть ли ожидание на выполнение работ?',
		answer: 'Срок ожидания начала работ, после подписания договора, в среднем, составляет от 10 дней и может меняться в зависимости от сезонной загрузки. Более точное время можно уточнить по телефону, заказать обратный звонок на сайте или написать нам в социальных сетях.'
	},
	{
		question: 'Как заказать услуги?',
		answer: 'Оставьте заявку через форму на сайте, позвоните по телефону +7 (964) 454-44-84 или напишите нам в социальных сетях — мы оперативно свяжемся с вами и проконсультируем по всем вопросам.'
	}
];

const FAQ: FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const answerRefs = useRef<Array<HTMLDivElement | null>>([]);

	const toggleIndex = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	useEffect(() => {
		answerRefs.current.forEach((ref, i) => {
			if (ref) {
				if (openIndex === i) {
					ref.style.height = ref.scrollHeight + 'px';
				} else {
					ref.style.height = '0px';
				}
			}
		});
	}, [openIndex]);

	return (
	<section className={styles.faqSection}>
		<Wrapper>
			<h2
			className={styles.title}
			>
				Часто задаваемые
				<PaintedText
				color={SiteColorsEnum.BLACK}
				>
					вопросы
				</PaintedText>
			</h2>
			<div className={styles.faqList}>
				{faqData.map((item, index) => (
				<div key={index} className={styles.faqItem}>
					<button
					className={styles.question}
					onClick={() => toggleIndex(index)}
					>
						<span>{item.question}</span>
						<span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
					</button>
					<div
					ref={el => answerRefs.current[index] = el}
					className={styles.answer}
					>
						<div className={styles.answerContent}>{item.answer}</div>
					</div>
				</div>
				))}
			</div>
		</Wrapper>
	</section>
	);
};

export default FAQ;
