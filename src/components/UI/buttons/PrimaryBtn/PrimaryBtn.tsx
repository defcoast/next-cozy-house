import {FC, JSX, ReactNode, MouseEvent} from 'react';
import styles from './PrimaryBtn.module.scss';
import classNames from 'classnames';

/** Интерфейс пропсов компонента. */
interface IProps {
    /** Ссылка. */
    href?:      string;

    /** Вложенная нода. */
    children?:  ReactNode;

    /** Корневой класс компонента. */
    className?: string;

    /** Таргет. */
    target?:     string;

    /** Функция клика. */
    onClick?: () => void;
}

/** Основная кнопка. */
const PrimaryBtn: FC<IProps> = (
{
    href,
    children,
    className,
    target,
    onClick,
}): JSX.Element => {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        onClick?.();
    }
    return (
        <a
        href={href}
        className={classNames(styles.btn, className)}
        target={target ? target : '_self'}
        rel="noreferrer"
        onClick={handleClick}
        >
            {children}
        </a>
    );
}

export default PrimaryBtn;
