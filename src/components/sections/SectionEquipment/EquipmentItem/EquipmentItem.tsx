import {FC, JSX } from 'react';
import {IEquipmentData} from '../IEquipmentData';
import styles from './EquipmentItem.module.scss';
import {m, domAnimation, LazyMotion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import Image from 'next/image';

/** Интерфейс пропсов компонента. */
interface IProps {
    equipment: IEquipmentData;
}

/** Элемент "оборудование". */
const EquipmentItem: FC<IProps> = ({equipment}): JSX.Element => {
    /** Хук наблюдателя пересечений списка. */
    const [refList, inViewList] = useInView({triggerOnce: true});

    /** Анимация списка. */
    const animationList = {
        visible: (index: number): object => ({opacity: 1, transition: {delay: index * 0.2, duration: .5}}),
        hidden: {opacity: 0, transition: {duration: 0.6}},
    }
    return (
    <LazyMotion features={domAnimation}>
        <m.li
        className={styles.equipmentItem}
        ref={refList}
        initial="hidden"
        animate={inViewList ? 'visible' : 'hidden'}
        variants={animationList}
        custom={equipment.id}
        >
            <h3 className={styles.title}>
                {equipment.title}
            </h3>

            {equipment.descriptionPoints.map((description: string, index: number) => (
                <p
                key={'equipment-des_' + index}
                className={styles.description}
                >
                    {description}
                </p>
            ))}

            <Image
            src={equipment.image}
            alt={equipment.title}
            className={styles.img}
            />
        </m.li>
    </LazyMotion>
    );
}

export default EquipmentItem;
