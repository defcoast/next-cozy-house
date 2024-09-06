import {FC, JSX, ReactNode} from 'react';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';

/** Интерфейс пропсов компонента. */
interface IProps {
    /** Цвет текста. */
    color:    SiteColorsEnum;

    /** Имя класса. */
    className?: string;

    /** Вложенная нода. */
    children: ReactNode;
}

/** Цветной текст. */
const PaintedText: FC<IProps> = (
{
    color,
    children,
    className,
}): JSX.Element => {
    return (
        <span
        style={{color: color}}
        className={className ?? ''}
        >
            &nbsp;{children}&nbsp;
        </span>
    );
}

export default PaintedText
