"use client"

import {FC, JSX} from 'react';
import styles from './SectionAdditional.module.scss'
import Wrapper from '../../common/Wrapper/Wrapper';
import AnimationTitle from '../../common/AnimationTitle/AnimationTitle';
import PaintedText from '../../common/PaintedText/PaintedText';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
import {IAdditionalData} from './IAdditionalData';
import AdditionalItem from './AdditionalItem/AdditionalItem';
import {AdditionalData} from './AdditionalData';


/** Секция "Дополнительные услуги". */
const SectionAdditional: FC = (): JSX.Element => {
    return (
        <section className={styles.additional} id="additional">
        <Wrapper>
            <AnimationTitle className={styles.title}>
                Дополнительные
                <PaintedText color={SiteColorsEnum.BLACK}>
                    услуги
                </PaintedText>
            </AnimationTitle>

            <ul className={styles.list}>
                {AdditionalData.map((additional: IAdditionalData) => (
                    <AdditionalItem
                    key={'additional_' + additional.id}
                    additional={additional}
                    />
                ))}
            </ul>
        </Wrapper>
    </section>
    );
}

export default SectionAdditional;
