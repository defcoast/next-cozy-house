import {FC, JSX} from 'react';
import styles from '../SectionSteps.module.scss';
import classNames from 'classnames';
import {m, domAnimation, LazyMotion} from 'framer-motion';
import {IStepData} from '../IstepData';
import {useInView} from 'react-intersection-observer';

/** Интерфейс пропсов компонента. */
interface IProps {
    step: IStepData;
}

/** Элемент "шаг". */
const StepItem: FC<IProps> = ({step}): JSX.Element => {
    /** Хук наблюдателя пересечений списка. */
    const [refList, inViewList] = useInView({triggerOnce: true});

    /** Анимация списка. */
    const animationList = {
        visible: (index: number): object => ({opacity: 1, transition: {delay: index * 0.1, duration: .5}}),
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
        custom={step.id}
        >
            <span className={classNames(styles.number, step.iconStyle)}>
                0{step.id}
            </span>

            <h3 className={styles.subtitle}>
                {step.title}
            </h3>

            <p className={styles.text}>
                {step.description}
            </p>
        </m.li>
    </LazyMotion>
    );
}

export default StepItem;
