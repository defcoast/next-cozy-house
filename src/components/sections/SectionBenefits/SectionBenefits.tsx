"use client"

import {FC, JSX} from 'react';
import styles from './SectionBenefits.module.scss';
import Wrapper from '../../common/Wrapper/Wrapper';
import PaintedText from '../../common/PaintedText/PaintedText';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
import {benefitsData, IBenefitsData} from './BenefitsData';
import AnimationTitle from '../../common/AnimationTitle/AnimationTitle';
import BenefitItem from './BenefitItem/BenefitItem';

/** Секция "Преимущества". */
const SectionBenefits: FC = (): JSX.Element => {

    return (
        <section className={styles.benefits} id="benefits">
            <Wrapper>
                <AnimationTitle className={styles.title}>
                    Механизированная штукатурка стен подходит для тех кто ценит
                    <PaintedText color={SiteColorsEnum.WHITE}>
                        качество, своё время и деньги
                    </PaintedText>
                </AnimationTitle>

                <ul className={styles.list}>
                    {benefitsData.map((benefit: IBenefitsData, index: number) => (
                       <BenefitItem
                       key={'benefit_' + benefit.id}
                       benefit={benefit}
                       index={index}
                       />
                    ))}
                </ul>
            </Wrapper>
        </section>
    );
}

export default SectionBenefits;
