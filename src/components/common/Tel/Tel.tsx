import {FC, JSX} from 'react';
import {tel} from '@/globalParams';

/** Интерфейс пропсов компонента. */
interface IProps {
    /** Корневой класс компонента. */
    className: string;
}

/** Номер телефона. */
const Tel: FC<IProps> = ({className}): JSX.Element => {
    return (
        <a
        href={'tel:' + tel}
        className={className}
        >
            {tel}
        </a>
    );
}

export default Tel;
