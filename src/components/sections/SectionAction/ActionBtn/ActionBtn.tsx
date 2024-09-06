import {FC, JSX, ReactNode} from 'react';
import styles from './ActionBtn.module.scss';
import classNames from 'classnames';

/** Интерфейс пропсов компонента. */
interface IProps {
    /** Вложенная нода. */
    children: ReactNode;

    /** Тип кнопки (нативное свойство). */
    type?: 'submit' | 'button' | 'reset';

    /** Имя класса. */
    className?: string
}

/** Кнопка отправки формы. */
const ActionBtn: FC<IProps> = (
{
    children,
    type = 'submit',
    className,
}): JSX.Element => {
    return (
        <button
            type={type === 'submit' || type === 'reset' || type === 'button' ? type : undefined}
            className={classNames(styles.button, className)}
        >
            {children}
        </button>
    );
}

export default ActionBtn;
