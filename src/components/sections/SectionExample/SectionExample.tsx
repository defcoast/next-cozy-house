'use client'

import {FC, JSX} from 'react';
import styles from './SectionExample.module.scss';
import Wrapper from '../../common/Wrapper/Wrapper';
import AnimationTitle from '../../common/AnimationTitle/AnimationTitle';
import PaintedText from '../../common/PaintedText/PaintedText';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
import 'react-photo-view/dist/react-photo-view.css';
import EmblaCarousel from '@/components/sections/SectionExample/EmblaCarousel/EmblaCarousel';
import {EmblaOptionsType} from 'embla-carousel';

/** Интерфейс изображения-слайда. */
interface Slide {
	/** Идентификатор слайда. */
	id: string,

	/** Путь к изображению. */
	src: string,

	/** Альтернативный текст. */
	alt: string,

	/** Приоритет слайда. */
	priority?: boolean
}

/** Секция "Примеры наших работ". */
const SectionExample: FC = (): JSX.Element => {
	const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }
	const SLIDES: Slide[] = [
		{id: '1', src: '/images/ex-01.webp', alt: 'Полусухая стяжка', priority: true},
		{id: '2', src: '/images/ex-02.webp', alt: 'Полусухая стяжка', priority: true},
		{id: '3', src: '/images/ex-03.webp', alt: 'Полусухая стяжка', priority: true},
		{id: '4', src: '/images/ex-04.webp', alt: 'Полусухая стяжка', priority: true},
		{id: '5', src: '/images/ex-05.webp', alt: 'Полусухая стяжка'},
		{id: '6', src: '/images/ex-06.webp', alt: 'Полусухая стяжка'},

		{id: '7', src: '/images/ex-1.webp', alt: 'Механизированная штукатурка'},
		{id: '8', src: '/images/ex-2.webp', alt: 'Механизированная штукатурка'},
		{id: '9', src: '/images/ex-3.webp', alt: 'Механизированная штукатурка'},
		{id: '10', src: '/images/ex-4.webp', alt: 'Механизированная штукатурка'},
		{id: '11', src: '/images/ex-5.webp', alt: 'Механизированная штукатурка'},
		{id: '12', src: '/images/ex-6.webp', alt: 'Механизированная штукатурка'},
	]

	return (
	<section className={styles.examples} id="examples">
		<Wrapper>
			<AnimationTitle className={styles.title}>
				<PaintedText color={SiteColorsEnum.BLACK}>Примеры</PaintedText>
				наших работ
			</AnimationTitle>

			<div className={styles.images}>
				<EmblaCarousel
				slides={SLIDES}
				options={OPTIONS}
				/>
			</div>
		</Wrapper>
	</section>
	);
};

export default SectionExample;
