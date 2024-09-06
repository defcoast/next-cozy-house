import {FC, JSX, LegacyRef} from 'react';
import styles from '../SectionAdditional.module.scss';
import {IAdditionalData} from '../IAdditionalData';
import {m, domAnimation, LazyMotion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import Image from 'next/image';

interface IProps {
    additional: IAdditionalData;
}

/** Элемент списка "Дополнительное". */
const AdditionalItem: FC<IProps> = ({additional}): JSX.Element => {
    /** Хук наблюдателя пересечений списка. */
    const [refList, inViewList] = useInView({triggerOnce: true})  as LegacyRef<HTMLLIElement>;

    /** Анимация списка. */
    const animationList = {
        visible: (index: number): object => ({opacity: 1, transition: {delay: index * 0.2, duration: .5}}),
        hidden: {opacity: 0, transition: {duration: 0.6}},
    }

    return (
    <LazyMotion features={domAnimation}>
        <m.li
        className={styles.item}
        ref={refList}
        initial="hidden"
        animate={inViewList ? 'visible' : 'hidden'}
        variants={animationList}
        custom={additional.id}
        >
            <Image
            src={additional.img}
            alt="Дополнительная услуга"
            className={styles.img}
            key={additional.id}
            />

            <p className={styles.description}>
                {additional.title}
            </p>
        </m.li>
    </LazyMotion>
    );
}

export default AdditionalItem;
