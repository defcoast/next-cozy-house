"use client"

import {FC, JSX } from 'react';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
import {tel, telegramLink, whatsAppLink} from '@/globalParams';
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
import Tel from '@/components/common/Tel/Tel';


/** Секция "Оффер". */
const SectionOffer: FC = (): JSX.Element => {
    /** Хук наблюдателя пересечений изображения станции. */
    const [refStation, inViewStation] = useInView({triggerOnce: true});

    /** Хук наблюдателя пересечений списка. */
    const [refList, inViewList] = useInView({triggerOnce: true});

    /** Хук наблюдателя пересечений изображения заголовка. */
    const [refTitle, inViewTitle] = useInView({triggerOnce: true});

    /** Хук наблюдателя пересечений изображения описания. */
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
        visible: {scale: 1, x: 0, transition: {duration: .5}},
        hidden: {scale: 0.1, x: -100, transition: {duration: 0.6}},
    }

    /** Анимация описания. */
    const animationDescription = {
        visible: {x: 0, opacity: 1, transition: {duration: .5}},
        hidden: {x: -200, opacity: 0, transition: {duration: 0.6}},
    }

    return (
    <section className={styles.offer}>
	    {/** Номер телефона. */}
	    <Tel className={styles.number} />
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
                className={styles.description}
                ref={refDescription}
                initial="hidden"
                animate={inViewDescription ? 'visible' : 'hidden'}
                variants={animationDescription}
                >
                    Вся самая актуальная и полезная информация<br />
                    <PaintedText color={SiteColorsEnum.PRIMARY}>
	                    в нашем канале
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
                    </PaintedText>
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
                    href={whatsAppLink + '?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%87%D1%83%20%D1%80%D0%B0%D1%81%D1%81%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C%20%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82.'}
                    target="_blank"
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
