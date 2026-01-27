"use client"

import {FC, JSX, useState} from 'react';

import Logo       from '../Logo/Logo';
import Tel        from '../Tel/Tel';
import Navigation from '../Navigation/Navigation';
import Wrapper    from '../Wrapper/Wrapper';
import SocialList from '../SocialList/SocialList';
import MobileMenu from '../MobileMenu/MobileMenu';

import {navigationData} from '../Navigation/NavigationData';
import {socialListData} from '@/models/SocialListData';

import styles from './Header.module.scss';

/** Шапка сайта. */
const Header: FC = (): JSX.Element => {
    /** Нужно ли отображать мобильное меню. */
    const [needShowMobileMenu, setNeedShowMobileMenu] = useState(false);

    /** Обработчик клика на бургер-меню. */
    const handleBurgerMenuClick = (): void => {
        setNeedShowMobileMenu(!needShowMobileMenu);
    }

    return (
        <header className={styles.header}>
            <Wrapper className={styles.wrapper}>
                {/** Логотип */}
                <Logo className={styles.logo} />

                {/** Список социальных сетей. */}
                <SocialList
                socialListData={socialListData}
                className={styles.socials}
                />

                {/** Номер телефона. */}
                <div className={styles.numberBox}>
                    <Tel className={styles.number} />
                    <span className={styles.available}>
                        Сейчас на связи
                    </span>
                </div>

                <div className={styles.mobileNumberBox}>
                    <Tel className={styles.mobileNumber} />

                    {/** Мобильное меню (триггер). */}
                    <span
                    className={styles.burger}
                    onClick={handleBurgerMenuClick}
                    />
                </div>


            </Wrapper>

            {/** Меню сайта. */}
           <Navigation navigationData={navigationData} />

            {/** Мобильное меню. */}
            <MobileMenu needShowMobileMenu={needShowMobileMenu}/>
        </header>
    );
}

export default Header;
