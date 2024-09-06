"use client"

import React, {FC, LegacyRef,} from 'react';
import Wrapper from '../../common/Wrapper/Wrapper';
import styles from './SectionAction.module.scss';
import AnimationTitle from '../../common/AnimationTitle/AnimationTitle';
import PaintedText from '../../common/PaintedText/PaintedText';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
import ImageBrigade from '../../../assets/images/action/brigade.webp';
import {m, domAnimation, LazyMotion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import ActionForm from './ActionForm/ActionForm';
import Image from 'next/image';

/** Секция "Действие" */
const SectionAction: FC = () => {

    /** Хук наблюдателя пересечений списка. */
    const [refBrigade, inViewBrigade] = useInView({triggerOnce: true}) as LegacyRef<HTMLDivElement>;

    /** Анимация списка. */
    const animationBrigade = {
        visible: {opacity: 1, y: 0, transition: {duration: .5}},
        hidden: {opacity: 0, y: 200, transition: {duration: 0.6}},
    }

    return (
    <section className={styles.action} id="action">
        <Wrapper className={styles.wrapper}>
            <AnimationTitle className={styles.title}>
                Нас 28 человек
                <PaintedText color={SiteColorsEnum.PRIMARY}>
                    4 профессиональных руководителя
                </PaintedText>
            </AnimationTitle>

            <div className={styles.content}>
                <LazyMotion features={domAnimation}>
                    <m.div
                    className={styles.brigade}
                    ref={refBrigade}
                    initial="hidden"
                    animate={inViewBrigade ? 'visible' : 'hidden'}
                    variants={animationBrigade}
                    >
                        <Image
                        src={ImageBrigade}
                        alt="Бригада специалистов"
                        className={styles.imgBrigade}
                        />
                    </m.div>
                </LazyMotion>

                <div id="form-box">
                    <div className={styles.infoBox}>
                        <p className={styles.info}>
                            При заказе механизированной штукатурки стен у нас — Вы получаете материалы по оптовой цене.
                        </p>
                        <span className={styles.img}/>
                    </div>

                    <ActionForm/>
                </div>
            </div>
        </Wrapper>
    </section>
    );
}

export default SectionAction;
