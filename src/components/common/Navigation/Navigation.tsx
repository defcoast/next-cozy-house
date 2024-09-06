import {FC, JSX}         from 'react';
import {INavigationData} from './INavigationData';

import styles from './Navigation.module.scss';

/** Интерфейс пропсов компонента. */
interface IProps {
    /** Данные списка навигации. */
    navigationData: INavigationData[];

    /** Является ли устройство мобильным. */
    isMobile?:      boolean;
}

/** Компонент навигации. */
const Navigation: FC<IProps> = (
{
    navigationData,
    isMobile,
}): JSX.Element => {
    return (
        <nav>
            <ul className={isMobile ? styles.mobileMenu : styles.menu}>
                {navigationData.map((navElement: INavigationData) => (
                    <li
                    className={styles.item}
                    key={'navigation' + navElement.id}
                    >
                        <a
                        href={'#' + navElement.anchor}
                        className={isMobile ? styles.mobileLink : styles.link}
                        >
                            {navElement.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation
