'use client'

import {domAnimation, LazyMotion, m} from 'framer-motion';
import styles from './ThanksPage.module.scss';
import PrimaryBtn from '@/components/UI/buttons/PrimaryBtn/PrimaryBtn';
import { useRouter } from 'next/navigation';

export default function ThanksPage() {

	const router = useRouter();

	const handleGoHome = () => {
		router.push('/');
	};

	return (
	<>
		<LazyMotion features={domAnimation}>
			<m.section
			className={styles.wrapper}
			initial={{opacity: 0, y: 40}}
			animate={{opacity: 1, y: 0}}
			transition={{duration: 0.6}}
			>
				<div className={styles.box}>
					<h1 className={styles.title}>Спасибо за заявку!</h1>

					<p className={styles.text}>
						Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
					</p>

						<PrimaryBtn
						className={styles.btn}
						onClick={handleGoHome}
						>
							Вернуться на главную
						</PrimaryBtn>
				</div>
			</m.section>
		</LazyMotion>
	</>
	);
}
