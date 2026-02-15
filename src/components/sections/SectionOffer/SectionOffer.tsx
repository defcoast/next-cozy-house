'use client'

import {FC, JSX} from 'react';
import {domAnimation, LazyMotion, m} from 'framer-motion';
import Wrapper from '../../common/Wrapper/Wrapper';
import classNames from 'classnames';
import PrimaryBtn from '../../UI/buttons/PrimaryBtn/PrimaryBtn';
import styles from './SectionOffer.module.scss';
import {useInView} from 'react-intersection-observer';
import {IOfferListData, offerListData} from './OfferListData';
import Image from 'next/image';

import IconTelegram from '../../../assets/images/socials/telegram.webp';
import ImageStationPn from '../../../assets/images/offer/pn.png';

/** Секция "Оффер". */
const SectionOffer: FC = (): JSX.Element => {
    /** Хук наблюдателя пересечений изображения станции. */
    const [refStation, inViewStation] = useInView({triggerOnce: true, rootMargin: '-20% 0px -20% 0px'});

    /** Хук наблюдателя пересечений списка. */
    const [refList, inViewList] = useInView({triggerOnce: true});

    /** Хук наблюдателя пересечений изображения заголовка. */
    const [refTitle, inViewTitle] = useInView({triggerOnce: true});

    /** Хук наблюдателя пересечений изображения описания. */
    const [refDescriptionMobile, inViewDescriptionMobile] = useInView({triggerOnce: true});
    const [refDescription, inViewDescription] = useInView({triggerOnce: true});

	/** Анимация изображения. */
	const animationImagePn = {
		visible: {opacity: 1, x: 0, transition: {duration: 0.6}},
		hidden: {opacity: 0, x: 250, transition: {duration: 0.6}},
	};

    /** Анимация списка. */
    const animationList = {
        visible: (index: number): object => ({opacity: 1, transition: {delay: index * 0.2, duration: .5}}),
        hidden: {opacity: 0, transition: {duration: 0.6}},
    }

    /** Анимация заголовка. */
    const animationTitle = {
	    hidden: {opacity: 0, y: 12},
	    visible: {
		    opacity: 1,
		    y: 0,
		    transition: {
			    duration: 0.5,
			    ease: 'easeOut',
		    },
	    },
    };

    /** Анимация описания. */
    const animationDescription = {
        visible: {x: 0, opacity: 1, transition: {duration: .5}},
        hidden: {x: -200, opacity: 0, transition: {duration: 0.6}},
    }

	const handleAnchor = (id: string): void => {
		const el = document.getElementById(id);
		if (null === el) { return; }

		el.scrollIntoView({behavior: 'smooth', block: 'start'});
	};


	return (
    <section className={styles.offer}>
        <LazyMotion features={domAnimation}>
            <Wrapper>
                <m.h1
                className={styles.title}
                ref={refTitle}
                initial="hidden"
                animate={inViewTitle ? 'visible' : 'hidden'}
                variants={animationTitle}
                >
	                Полусухая стяжка пола и механизированная штукатурка стен во Владивостоке от 850 р/м2 с материалом
                </m.h1>

	            <m.p
	            className={styles.description}
	            ref={refDescription}
	            initial="hidden"
	            animate={inViewDescription ? 'visible' : 'hidden'}
	            variants={animationDescription}
	            >
		            С оплатой по факту выполнения работ и гарантией 3 года по договору
	            </m.p>

                <ul className={styles.list}>
                    {offerListData.map((item: IOfferListData) => (
                    <m.li
                    key={'sectionOfferList_' + item.id}
                    className={styles.item}
                    ref={refList}
                    initial="hidden"
                    animate={inViewList ? 'visible' : 'hidden'}
                    variants={animationList}
                    custom={item.id}
                    >
                            <span className={classNames(styles.item, styles[`iconType${item.icon}`])}>
                                {item.text}
                            </span>
                    </m.li>
                    ))}
                </ul>

                <div className={styles.buttons}>
                    <PrimaryBtn
                    onClick={() => handleAnchor('action__form')}
                    >
                        Рассчитать стоимость работ
                    </PrimaryBtn>
                </div>
            </Wrapper>
            <div className={styles.stationBox}>
	            <m.div
	            ref={refStation}
	            initial="hidden"
	            animate={inViewStation ? 'visible' : 'hidden'}
	            variants={animationImagePn}
	            >
		            <Image
		            src={ImageStationPn}
		            alt="Пневмонагнетатель"
		            className={styles.imgPn}
		            loading="eager"
		            />
	            </m.div>
            </div>

            <div className={styles.bottomEffect}/>
        </LazyMotion>
    </section>
    );
}

export default SectionOffer;
