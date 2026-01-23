'use client'

import {FC, JSX} from 'react';
import Wrapper from '@/components/common/Wrapper/Wrapper';
import AnimationTitle from '@/components/common/AnimationTitle/AnimationTitle';
import PaintedText from '@/components/common/PaintedText/PaintedText';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
import styles from './SectionReviews.module.scss';

import review1 from './review_1.webp';
import review2 from './review_2.webp';
import review3 from './review_3.webp';
import review4 from './review_4.webp';
import Image from 'next/image';
import PrimaryBtn from '@/components/UI/buttons/PrimaryBtn/PrimaryBtn';

/** Секция "Отзывы". */
const SectionReviews: FC = (): JSX.Element => {
	return (
	<section className={styles.reviews} id="reviews">
		<Wrapper>
			<AnimationTitle className={styles.title}>
				<PaintedText color={SiteColorsEnum.PRIMARY}>
					Реальные отзывы о нас на сайте
				</PaintedText>
				<a
				href="https://www.vl.ru/sk-uyutnyj-dom#comments"
				className={styles.titleLink}
				target="_blank"
				>
					VL.ru
				</a> 👈
				<PaintedText color={SiteColorsEnum.PRIMARY}>Жми</PaintedText>
			</AnimationTitle>

			<ul className={styles.list}>
				<li className={styles.item}>
					<a
					href="https://www.vl.ru/sk-uyutnyj-dom#p15889233"
					target="_blank"
					className={styles.link}
					>
						<Image
						className={styles.image}
						src={review1}
						alt="Отзыв о нас"
						sizes="(max-width: 1240px) 100vw, 580px"
						style={{width: '100%', height: 'auto'}}
						placeholder="blur"
						loading="lazy"
						/>
					</a>

					<span className={styles.text}>

					<PrimaryBtn
					href="https://www.vl.ru/sk-uyutnyj-dom#p15889233"
					className={styles.btnLink}
					target="_blank"
					>
						Прочитать на VL.ru
					</PrimaryBtn>

					</span>
				</li>

				<li className={styles.item}>
					<a
					href="https://www.vl.ru/sk-uyutnyj-dom#p16214512"
					target="_blank"
					className={styles.link}
					>
						<Image
						className={styles.image}
						src={review2}
						alt="Отзыв о нас"
						sizes="(max-width: 1240px) 100vw, 580px"
						style={{width: '100%', height: 'auto'}}
						placeholder="blur"
						loading="lazy"
						/>
					</a>

					<span className={styles.text}>
						<PrimaryBtn
						href="https://www.vl.ru/sk-uyutnyj-dom#p16214512"
						className={styles.btnLink}
						target="_blank"
						>
						Прочитать на VL.ru
					</PrimaryBtn>
					</span>
				</li>

				<li className={styles.item}>
					<a
					href="https://www.vl.ru/sk-uyutnyj-dom#p16213595"
					target="_blank"
					className={styles.link}
					>
						<Image
						className={styles.image}
						src={review3}
						alt="Отзыв о нас"
						sizes="(max-width: 1240px) 100vw, 580px"
						style={{width: '100%', height: 'auto'}}
						placeholder="blur"
						loading="lazy"
						/>
					</a>

					<span className={styles.text}>

						<PrimaryBtn
						href="https://www.vl.ru/sk-uyutnyj-dom#p16213595"
						className={styles.btnLink}
						target="_blank"
						>
						Прочитать на VL.ru
					</PrimaryBtn>
					</span>
				</li>

				<li className={styles.item}>
					<a
					href="https://www.vl.ru/sk-uyutnyj-dom#p16176714"
					target="_blank"
					className={styles.link}
					>
						<Image
						className={styles.image}
						src={review4}
						alt="Отзыв о нас"
						sizes="(max-width: 1240px) 100vw, 580px"
						style={{width: '100%', height: 'auto'}}
						placeholder="blur"
						loading="lazy"
						/>
					</a>

					<span className={styles.text}>
						<PrimaryBtn
						href="https://www.vl.ru/sk-uyutnyj-dom#p16176714"
						className={styles.btnLink}
						target="_blank"
						>
						Прочитать на VL.ru
					</PrimaryBtn>
					</span>
				</li>
			</ul>
		</Wrapper>
	</section>
	);
}

export default SectionReviews;
