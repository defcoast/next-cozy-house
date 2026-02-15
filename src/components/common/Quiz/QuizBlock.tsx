'use client';

import { useState } from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import styles from './QuizBlock.module.scss';
import useActionForm from '@/components/sections/SectionAction/ActionForm/useActionForm'; // Импорт стилей

interface QuizAnswers {
	[step: number]: string;
}

const steps = [
	{
		question: 'Какая площадь помещения?',
		options: ['До 50 м²', '50–100 м²', '100–200 м²', 'Более 200 м²'],
	},
	{
		question: 'Насколько срочно нужно выполнить работы?',
		options: ['В течение недели', '1–2 недели', 'В течение месяца', 'Не срочно'],
	},
	{
		question: 'Какой тип работ интересует?',
		options: ['Штукатурка стен', 'Стяжка пола', 'Возведение перегородок', 'Несколько вариантов'],
	},
	{
		question: 'Какой тип помещения?',
		options: ['Квартира', 'Частный дом', 'Коммерческое помещение', 'Другое'],
	},
];

export default function QuizBlock() {
	const {
		handleSubmit,
		onChangeName,
		onChangeTel,
		name,

		tel,
	} = useActionForm();

	const totalSteps = steps.length + 1;

	const [step, setStep] = useState(0);
	const [answers, setAnswers] = useState<QuizAnswers>({});

	const handleSelect = (value: string) => {
		setAnswers((prev) => ({
			...prev,
			[step]: value,
		}));

		setStep(step + 1);
	};

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		// Передаем answers в handleSubmit
		handleSubmit(event, answers);
	};

	const handleBack = () => {
		if (0 < step) {
			setStep(step - 1);
		}
	};

	const progressPercent = Math.min(((step + 1) / totalSteps) * 100, 100);

	return (
	<LazyMotion features={domAnimation}>
		<section className={styles.quizWrapper}>
			<div className={styles.quizCard}>
				{0 < step && (
				<button type="button" className={styles.backBtn} onClick={handleBack}>
					← Назад
				</button>
				)}

				<div className={styles.progressBar}>
					<m.div
					className={styles.progressFill} // Класс из модуля SCSS
					animate={{ width: `${progressPercent}%` }}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
					/>
				</div>

				<div className={styles.progressText}>
					Шаг {Math.min(step + 1, totalSteps)} из {totalSteps}
				</div>

				<AnimatePresence mode="wait">
					{step < 4 && (
					<m.div
					key={step}
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -40 }}
					transition={{ duration: 0.35 }}
					>
						<h2 className={styles.question}>{steps[step].question}</h2>

						<div className={styles.options}>
							{steps[step].options.map((opt) => (
							<button
							key={opt}
							className={`${styles.optionBtn} ${
							answers[step] === opt ? styles.active : ''
							}`}
							onClick={() => {
								handleSelect(opt);
							}}
							>
								{opt}
							</button>
							))}
						</div>
					</m.div>
					)}

					{step === 4 && (
					<m.div
					key="form"
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.35 }}
					>
						<h3 className={styles.formTitle}>Оставьте контакты — рассчитаем стоимость</h3>

						<form
						className={styles.form}
						action="#"
						method="post"
						onSubmit={handleFormSubmit}
						>
							<input
							type="text"
							name="phone"
							className={styles.input}
							placeholder="Номер телефона"
							value={tel}
							onInput={onChangeTel}
							/>

							<input
							type="text"
							name="name"
							className={styles.input}
							placeholder="Имя"
							value={name}
							onInput={onChangeName}
							/>

							<button
							type="submit"
							className={styles.submitBtn}
							>
								Получить расчет
							</button>
						</form>
					</m.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	</LazyMotion>
	);
}
