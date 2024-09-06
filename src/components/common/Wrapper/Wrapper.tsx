import {FC, JSX, ReactNode} from 'react';
import styles from './Wrapper.module.scss';
import classNames from 'classnames';

/** Интерфейс пропсов компонента. */
interface IProps {
    /** Корневой класс компонента. */
    className?: string | undefined;

    /** Вложенная нода. */
    children?:  ReactNode;
}

/** Универсальный компонент обертки. */
const Wrapper: FC<IProps> = (
{
    className,
    children,
}): JSX.Element => {
    return (
        <div className={classNames(styles.wrapper, className)}>
            {children}
        </div>
    );
}

export default Wrapper;
