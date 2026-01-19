import {FC, JSX} from 'react';
import imageLogo from '@/assets/images/logo.png'
import imageFooterLogo from '@/assets/images/footer-logo.webp'
import classNames from 'classnames';
import styles from './Logo.module.scss';
import {LogoType} from '@/enums/LogoTypeEnum';
import Image from 'next/image';



/** Интерфейс пропсов компонента. */
interface IProps {
    /** Класс корневого блока. */
    className?: string;

    /** Тип логотипа. */
    type?: LogoType;
}

/** Логотип сайта. */
const Logo: FC<IProps> = (
{
    className,
    type = LogoType.HEADER,
}): JSX.Element => {
    return (
        <a href="/">
            <Image
            src={LogoType.HEADER === type ? imageLogo : imageFooterLogo}
            alt="Логотип компании Уютный Дом"
            className={classNames(styles.logo, className)}
            />
        </a>
    );
}

export default Logo;
