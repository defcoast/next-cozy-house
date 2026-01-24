'use client'

import React, {useCallback, useRef} from 'react'
import Image from 'next/image'
import {EmblaOptionsType, EmblaCarouselType} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {PhotoProvider, PhotoView} from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import {useInView} from 'react-intersection-observer'

import {DotButton, useDotButton} from './EmblaCarouselDotButton'
import {PrevButton, NextButton, usePrevNextButtons} from './EmblaCarouselArrowButtons'
import './Embla.scss'

type Slide = {
	id: string
	src: string
	alt?: string
	priority?: boolean
}

type PropType = {
	slides: Slide[]
	options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = ({slides, options}) => {
	const autoplay = useRef(
	Autoplay({
		delay: 2500,
		stopOnInteraction: false,
		stopOnMouseEnter: false,
	})
	)

	const [emblaRef, emblaApi] = useEmblaCarousel(
	{
		...(options ?? {}),
		align: 'start',
		slidesToScroll: 'auto',
		containScroll: 'trimSnaps',
		loop: true,
	},
	[autoplay.current]
	)

	const {ref: inViewRef, inView} = useInView({
		threshold: 0.2,
	});

	const setRefs = useCallback(
	(node: HTMLDivElement | null) => {
		emblaRef(node);
		inViewRef(node);
	},
	[emblaRef, inViewRef]
	);

	React.useEffect(() => {
		const autoplayPlugin = emblaApi?.plugins()?.autoplay;
		if (!autoplayPlugin) return;

		if (inView) {
			autoplayPlugin.play();
		} else {
			autoplayPlugin.stop();
		}
	}, [inView, emblaApi]);

	const onNavButtonClick = useCallback((api: EmblaCarouselType) => {
		const ap = api?.plugins()?.autoplay
		if (!ap) return
		ap.reset()
	}, [])

	const {selectedIndex, scrollSnaps, onDotButtonClick} =
	useDotButton(emblaApi, onNavButtonClick)

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi, onNavButtonClick)

	return (
	<section className="embla">
		<PhotoProvider>
			<div className="embla__viewport" ref={setRefs}>
				<div className="embla__container">
					{slides.map((slide, index) => (
					<div className="embla__slide" key={slide.id}>
						<PhotoView src={slide.src}>
							<div className="embla__slide__imgWrap">
								<Image
								src={slide.src}
								alt={slide.alt ?? `Slide ${index + 1}`}
								fill
								sizes="360px"
								priority={true === slide.priority}
								style={{objectFit: 'cover'}}
								/>
							</div>
						</PhotoView>
					</div>
					))}
				</div>
			</div>
		</PhotoProvider>

		<div className="embla__controls">
			<div className="embla__buttons">
				<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
				<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
			</div>

			{/* Mobile: counter, Desktop: dots */}
			<div className="embla__pagination">
		<span className="embla__counter">
			{selectedIndex + 1} / {scrollSnaps.length}
		</span>

				<div className="embla__dots">
					{scrollSnaps.map((_, index) => (
					<DotButton
					key={index}
					onClick={() => onDotButtonClick(index)}
					className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
					/>
					))}
				</div>
			</div>
		</div>
	</section>
	)
}

export default EmblaCarousel
