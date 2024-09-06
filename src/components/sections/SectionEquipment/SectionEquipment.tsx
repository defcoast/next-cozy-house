"use client"

import {FC, JSX} from 'react';
import AnimationTitle from '../../common/AnimationTitle/AnimationTitle';
import styles from './SectionEquipment.module.scss';
import PaintedText from '../../common/PaintedText/PaintedText';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
import EquipmentItem from './EquipmentItem/EquipmentItem';
import {EquipmentData} from './EquipmentData';
import {IEquipmentData} from './IEquipmentData';
import Wrapper from '../../common/Wrapper/Wrapper';

/** Секция "Оборудование". */
const SectionEquipment: FC = (): JSX.Element => {
    return (
        <section className={styles.equipment} id="equipment">
            <Wrapper>
                <AnimationTitle className={styles.title}>
                    Обзоры
                    <PaintedText color={SiteColorsEnum.PRIMARY}>
                        на оборудование
                    </PaintedText>
                </AnimationTitle>

                <ul className={styles.list}>
                    {EquipmentData.map((equipment: IEquipmentData) => (
                        <EquipmentItem
                        key={'equipment_' + equipment.id}
                        equipment={equipment}
                        />
                    ))}
                </ul>
            </Wrapper>
        </section>
    );
}

export default SectionEquipment;
