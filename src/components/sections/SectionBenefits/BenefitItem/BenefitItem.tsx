import {FC, JSX, LegacyRef} from 'react';
import styles from '../SectionBenefits.module.scss';
import PaintedText from '../../../common/PaintedText/PaintedText';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
import classNames from 'classnames';
import {IBenefitsData} from '../BenefitsData';
import {m, domAnimation, LazyMotion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

/** Интерфейс пропсов компонента. */
interface IProps {
    /** Объект данных преимущества.*/
    benefit: IBenefitsData;

    /** Индекс списка. */
    index: number;
}

/** Контейнер с преимуществом. */
const BenefitItem: FC<IProps> = (
{
    benefit,
    index,
}): JSX.Element => {
    /** Хук наблюдателя пересечений списка. */
    const [refList, inViewList] = useInView({triggerOnce: true}) as LegacyRef<HTMLLIElement>;

    /** Анимация списка. */
    const animationList = {
        visible: (index: number): object => ({opacity: 1, transition: {delay: index * 0.1, duration: .5}}),
        hidden: {opacity: 0, transition: {duration: 0.6}},
    }

    return (
    <LazyMotion features={domAnimation}>
        <m.li
        className={styles.item}
        key={benefit.id}
        ref={refList}
        initial="hidden"
        animate={inViewList ? 'visible' : 'hidden'}
        variants={animationList}
        custom={benefit.id}
        >
            <span className={styles.number}>
                {index + 1}
            </span>

            <p className={styles.description}>
                {benefit.text}
                {benefit.specialText &&
                    <PaintedText color={SiteColorsEnum.NEON_GREEN}>
                        {benefit.specialText}
                    </PaintedText>
                }
            </p>

            <div className={classNames(styles.icon, benefit.icon)} />
        </m.li>
    </LazyMotion>
    );
}

export default BenefitItem;
