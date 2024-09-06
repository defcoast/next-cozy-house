import {FC, JSX} from 'react';
import {m, domAnimation, LazyMotion} from 'framer-motion';
import styles from '../SectionAbout.module.scss';
import PaintedText from '../../../common/PaintedText/PaintedText';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
import ImageStation from '../../../../assets/images/about/station_1.webp'
import {useInView} from 'react-intersection-observer';
import Image from 'next/image';

/** Блок "Что такое механизированная штукатурка". */
const AboutBox: FC = (): JSX.Element => {
    const [refBox, inViewBox] = useInView({triggerOnce: true});

    /** Анимация контейнера. */
    const animationBox = {
        visible: {opacity: 1, x: 0, transition: {duration: 0.6}},
        hidden: {opacity: 0, x: -200, transition: {duration: 0.6}},
    };

    return (
        <LazyMotion features={domAnimation}>
            <m.div
            ref={refBox}
            initial="hidden"
            animate={inViewBox ? 'visible' : 'hidden'}
            variants={animationBox}
            >
                <h2 className={styles.title} style={{marginTop: 120}}>
                    Что такое
                    <PaintedText color={SiteColorsEnum.WHITE}>
                        механизированная штукатурка стен?
                    </PaintedText>
                </h2>

                <p className={styles.description}>
                    С возникновением технологии механизированного (машинного) нанесения штукатурки уже нет необходимости выполнять эту работу вручную.
                </p>

                <div className={styles.box}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            При ручной штукатурке смесь необходимо готовить небольшими порциями. Дело в том, что она в течение 15 минут застывает, а работы вручную проводятся медленно.
                        </li>
                        <li className={styles.item}>
                            Даже самый опытный штукатур не сможет каждый раз готовить раствор одинаковый по консистенции и наносить его на всю поверхность одновременно. Он сначала замешивает раствор, затем набрасывает его на стену.
                        </li>
                        <li className={styles.item}>
                            В результате получается эффект чешуи, при котором одна часть стены почти подсохла, другая – начала подсыхать, а третья – только обрабатывается. Со временем на таких поверхностях возникают неровности и трещины.
                        </li>
                        <li className={styles.item}>
                            Механизированная штукатурка, в отличие от ручной, наноситься быстро и ровно.
                        </li>
                    </ul>

                    <Image
                    src={ImageStation}
                    alt="Изображение процесса нанесения механизированной штукатурки"
                    className={styles.img}
                    objectFit={'scale-down'}
                    />
                </div>
            </m.div>
        </LazyMotion>
    );
}

export default AboutBox;
