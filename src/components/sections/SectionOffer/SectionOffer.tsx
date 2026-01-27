'use client'

import {FC, JSX} from 'react';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
import {tel, telegramLink} from '@/globalParams';
import {domAnimation, LazyMotion, m} from 'framer-motion';
import Wrapper from '../../common/Wrapper/Wrapper';
import PaintedText from '../../common/PaintedText/PaintedText';
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

	const animationDescriptionMobile = {
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
                <div className={styles.tagline}>
                    <span className={styles.taglineText}>
                        Геометрия пространства
                    </span>
                </div>

                <m.h1
                className={styles.title}
                ref={refTitle}
                initial="hidden"
                animate={inViewTitle ? 'visible' : 'hidden'}
                variants={animationTitle}
                >
                    Полусухая стяжка пола и механизированная штукатурка стен
                </m.h1>

                <m.p
                className={classNames(styles.description, styles.mobileDescription)}
                ref={refDescriptionMobile}
                initial="hidden"
                animate={inViewDescriptionMobile ? 'visible' : 'hidden'}
                variants={animationDescriptionMobile}
                >
                    Вся самая актуальная и полезная информация<br />
                    <PaintedText color={SiteColorsEnum.PRIMARY}>
	                    в нашем канале <br />
                    </PaintedText>
	                <PaintedText color={SiteColorsEnum.PRIMARY}>жми 👉</PaintedText>
	                <a
	                className={styles.tgLink}
	                href={telegramLink}
	                target="_blank"
	                >
		                <PaintedText
		                color={SiteColorsEnum.WHITE}
		                >
			                Telegram
		                </PaintedText>
		                <Image
		                src={IconTelegram}
		                alt="Перейти в телеграм"
		                width={20}
		                height={20}
		                className={styles.tg}
		                />
	                </a>
                </m.p>

	            <m.p
	            className={styles.description}
	            ref={refDescription}
	            initial="hidden"
	            animate={inViewDescription ? 'visible' : 'hidden'}
	            variants={animationDescription}
	            >
		            Вся самая актуальная и полезная информация<br />
		            <PaintedText color={SiteColorsEnum.PRIMARY}>
			            в нашем канале
		            </PaintedText>
		            <a
		            className={styles.tgLink}
		            href={telegramLink}
		            target="_blank"
		            >
			            <PaintedText
			            color={SiteColorsEnum.WHITE}
			            >
				            Telegram
			            </PaintedText>
			            <Image
			            src={IconTelegram}
			            alt="Перейти в телеграм"
			            width={20}
			            height={20}
			            className={styles.tg}
			            />
		            </a>
		            <PaintedText color={SiteColorsEnum.PRIMARY}>&nbsp;👈 жми</PaintedText>
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

                    <PrimaryBtn href={'tel:' + tel}>
                        Позвонить
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
