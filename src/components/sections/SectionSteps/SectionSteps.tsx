'use client'

import {FC, JSX} from 'react';
import styles from './SectionSteps.module.scss';
import Wrapper from '../../common/Wrapper/Wrapper';
import PaintedText from '../../common/PaintedText/PaintedText';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
import AnimationTitle from '../../common/AnimationTitle/AnimationTitle';
import StepItem from './StepItem/StepItem';
import {StepData} from './StepData';
import {IStepData} from './IstepData';

/** Секция "Шаги". */
const SectionSteps: FC = (): JSX.Element => {
    return (
        <section className={styles.steps} id="steps">
        <Wrapper>
            <AnimationTitle className={styles.title}>
                Всего 4 шага
                <PaintedText color={SiteColorsEnum.WHITE}>
                    к идеально ровным полам и стенам
                </PaintedText>
            </AnimationTitle>

            <ul className={styles.list}>
                {StepData.map((step: IStepData) => (
                    <StepItem
                    key={'step_' + step.id}
                    step={step}
                    />
                ))}
            </ul>
        </Wrapper>
    </section>
    );
}

export default SectionSteps;
