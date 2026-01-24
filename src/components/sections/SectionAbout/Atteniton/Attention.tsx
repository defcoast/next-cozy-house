import {FC, JSX } from 'react';
import styles from './Attention.module.scss';
import classNames from 'classnames';
import Tel from '../../../common/Tel/Tel';
import PaintedText from '../../../common/PaintedText/PaintedText';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
import SocialBox from '../SocialBox/SocialBox';
import {m, domAnimation, LazyMotion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {telegramLink} from '@/globalParams';
import Image from 'next/image';
import IconTelegram from '@/assets/images/socials/telegram.webp';

/** Блок "Предупреждение". */
const Attention: FC = (): JSX.Element => {

    /** Хук наблюдателя пересечений контейнера. */
    const [refBox, inViewBox] = useInView({triggerOnce: true});

    /** Анимация контейнера. */
    const animationBox = {
        visible: {opacity: 1, transition: {duration: 0.6, delay: 0.2}},
        hidden: {opacity: 0, transition: {duration: 0.6, delay: 0.2}},
    };
    return (
    <LazyMotion features={domAnimation}>
        <m.div
        className={styles.attention}
        ref={refBox}
        initial="hidden"
        animate={inViewBox ? 'visible' : 'hidden'}
        variants={animationBox}
        >
            <h3 className={styles.title}>
                Важно:
            </h3>

            <p className={styles.text}>
                <PaintedText color={SiteColorsEnum.PRIMARY}>
                    <b>Для экономии бюджета необходимо правильно распределить этапы работ.</b> <br />
                </PaintedText>
	            <br />
                <b>ЭЛЕКТРОМОНТАЖНЫЕ И САНТЕХНИЧЕСКИЕ РАБОТЫ В ОБЯЗАТЕЛЬНОМ ПОРЯДКЕ ПРОВОДЯТСЯ ТОЛЬКО ПОСЛЕ ВЫРАВНИВАНИЯ СТЕН И ПОЛОВ ТОГДА ФИНАНСОВЫЕ ЗАТРАТЫ БУДУТ НА 15 % МЕНЬШЕ</b>
            </p>

	        <p className={classNames(styles.text, styles.mobileTgText)}>
		        <PaintedText className={styles.tgParagraph} color={SiteColorsEnum.PRIMARY}>
			        ПОДРОБНЕЕ В НАШЕМ КАНАЛЕ <br />
			        <PaintedText color={SiteColorsEnum.PRIMARY}>Жми 👉</PaintedText>
			        <a
			        className={styles.tgLink}
			        href={telegramLink}
			        target="_blank"
			        >
				        <PaintedText
				        color={SiteColorsEnum.WHITE}
				        >
					        TELEGRAM
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
	        </p>

	        <p className={classNames(styles.text, styles.tgText)}>
		        <PaintedText className={styles.tgParagraph} color={SiteColorsEnum.PRIMARY}>
			        ПОДРОБНЕЕ В НАШЕМ КАНАЛЕ &nbsp;

			        <a
			        className={styles.tgLink}
			        href={telegramLink}
			        target="_blank"
			        >
				        <PaintedText
				        color={SiteColorsEnum.WHITE}
				        >
					        TELEGRAM
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
		        &nbsp;👈
		        <PaintedText color={SiteColorsEnum.PRIMARY}>Жми</PaintedText>
	        </p>

            <a
            href="#action__form"
            className={classNames(styles.text, styles.textAlignCenter, styles.textDecorationUnderline)}
            >
                Свяжитесь с нами для бесплатной консультации
            </a>

            <Tel className={styles.number} />

            <SocialBox />
        </m.div>
    </LazyMotion>
    );
}

export default Attention;
