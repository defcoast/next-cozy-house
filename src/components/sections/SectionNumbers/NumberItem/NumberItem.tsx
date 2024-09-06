import {FC, JSX} from 'react';
import {INumberData} from '../INumberData';
import styles from './NumberItem.module.scss';
import {m, domAnimation, LazyMotion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

/** Интерфейс пропсов компонента.  */
interface IProps {
    numberData: INumberData;
}

/** Элемент списка "Мы в цифрах". */
const NumberItem: FC<IProps> = ({numberData}): JSX.Element => {
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
        key={numberData.id}
        className={styles.numberBox}
        ref={refList}
        initial="hidden"
        animate={inViewList ? 'visible' : 'hidden'}
        variants={animationList}
        custom={numberData.id}
        >
            <h3 className={styles.title}>
            <span className={styles.titleBold}>
                {numberData.number}
            </span>
                &nbsp;{numberData.title}
            </h3>
            <h4 className={styles.subtitle}>
                {numberData.subtitle}
            </h4>

            <span className={styles.mark}/>
        </m.li>
    </LazyMotion>
    );
}

export default NumberItem;
