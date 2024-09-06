'use client'

import {FC, JSX} from 'react';
import styles from './SectionNumbers.module.scss';
import Wrapper from '../../common/Wrapper/Wrapper';
import AnimationTitle from '../../common/AnimationTitle/AnimationTitle';
import PaintedText from '../../common/PaintedText/PaintedText';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
import {NumberData} from './NumberData';
import {INumberData} from './INumberData';
import NumberItem from './NumberItem/NumberItem';


/** Секция "Мы в цифрах". */
const SectionNumbers: FC = (): JSX.Element => {
    return (
    <section className={styles.numbers} id="numbers">
        <Wrapper>

            <AnimationTitle className={styles.title}>
                Сегодня компания
                <PaintedText color={SiteColorsEnum.PRIMARY}>
                    “Уютный дом” - это
                </PaintedText>
            </AnimationTitle>

            <ul className={styles.list}>
                {NumberData.map((number: INumberData) => (
                <NumberItem
                key={'number_' + number.id}
                numberData={number}
                />
                ))}
            </ul>
        </Wrapper>
    </section>
    );
}

export default SectionNumbers
