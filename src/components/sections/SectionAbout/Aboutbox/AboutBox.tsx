import {FC, JSX} from 'react';
import {m, domAnimation, LazyMotion} from 'framer-motion';
import styles from '../SectionAbout.module.scss';
import PaintedText from '../../../common/PaintedText/PaintedText';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
import ImageStation from '../../../../assets/images/about/station_1.webp'
import ImageStationPn from '@/assets/images/about/station_2.webp'
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

	const [refBoxPn, inViewBoxPn] = useInView({triggerOnce: true});

	/** Анимация контейнера. */
	const animationBoxPn = {
		visible: {opacity: 1, x: 0, transition: {duration: 0.6}},
		hidden: {opacity: 0, x: 200, transition: {duration: 0.6}},
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

	        <m.div
	        ref={refBoxPn}
	        initial="hidden"
	        animate={inViewBoxPn ? 'visible' : 'hidden'}
	        variants={animationBoxPn}
	        >
		        <h2 className={styles.title} style={{marginTop: 120}}>
			        Что такое
			        <PaintedText color={SiteColorsEnum.WHITE}>
				        полусухая стяжка пола?
			        </PaintedText>
		        </h2>

		        <p className={styles.description}>
			        Полусухая стяжка — это современный способ выравнивания пола, при котором используется специальное оборудование и цементно-песчаная смесь с минимальным содержанием воды.
		        </p>

		        <div className={styles.box}>
			        <Image
			        src={ImageStationPn}
			        alt="Изображение процесса полусухой стяжки"
			        className={styles.img}
			        style={{ objectFit: 'scale-down', height: 'max-content' }}
			        />

			        <ul className={styles.list}>
				        <li className={styles.item}>
					        При традиционной стяжке раствор замешивается жидким и укладывается вручную. Такой способ требует много времени на высыхание и часто приводит к усадке и трещинам.
				        </li>
				        <li className={styles.item}>
					        При полусухой стяжке смесь подаётся механизировано, равномерно распределяется по поверхности и сразу уплотняется.
				        </li>
				        <li className={styles.item}>
					        Благодаря минимальному количеству воды смесь не растекается, почти не даёт усадки и быстро набирает прочность.
				        </li>
				        <li className={styles.item}>
					        По полусухой стяжке можно ходить уже через 12 часов, а через 48 часов допустима слабая нагрузка.
				        </li>
				        <li className={styles.item}>
					        В результате получается ровное, прочное основание, полностью готовое под плитку, ламинат, паркет или другое напольное покрытие.
				        </li>
				        <li className={styles.item}>
					        Для сравнения, работы по обычной стяжке на площади 50-70 квадратных метров занимают около 7 дней, а работа полусухой стяжкой - всго 1 день.
				        </li>
			        </ul>
		        </div>
	        </m.div>
        </LazyMotion>
    );
}

export default AboutBox;
