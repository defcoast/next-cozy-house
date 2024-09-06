import {FC, JSX, ReactNode} from 'react';
import {useInView} from 'react-intersection-observer';
import {m, domAnimation, LazyMotion} from 'framer-motion';
import {AnimationForTitle} from '@/animations/AnimationForTitle';

/** Интерфейс пропсов компонента. */
interface IProps {
    /** Вложенная нода. */
    children: ReactNode;

    /** Имя класса. */
    className?: string;
}

/** Анимированный заголовок секции */
const AnimationTitle: FC<IProps> = (
{
    children,
    className,
}): JSX.Element => {
    /** Хук наблюдателя пересечений заголовка. */
    const [refTitle, inViewTitle] = useInView({triggerOnce: true});

    return (
    <LazyMotion features={domAnimation}>
        <m.h2
        className={className}
        ref={refTitle}
        initial="hidden"
        animate={inViewTitle ? 'visible' : 'hidden'}
        variants={AnimationForTitle}
        >
            {children}
        </m.h2>
    </LazyMotion>
    );
}

export default AnimationTitle;
