"use client"

import {FC, JSX} from 'react';
import Wrapper from '../../common/Wrapper/Wrapper';
import AboutBox from './Aboutbox/AboutBox';
import Attention from './Atteniton/Attention';
import styles from './SectionAbout.module.scss'

/** Секция "Что это такое". */
const SectionAbout: FC = (): JSX.Element => {
    return (
        <section className={styles.about} id="about">
            <Wrapper>
                <AboutBox />
                <Attention />
            </Wrapper>
        </section>
    );
}

export default SectionAbout;
