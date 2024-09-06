import {FC, JSX} from 'react';
import styles from './Footer.module.scss';
import Logo from '../Logo/Logo';
import Tel from '../Tel/Tel';
import {email} from '@/globalParams';
import SocialList from '../SocialList/SocialList';
import {socialListData} from '@/models/SocialListData';
import {LogoType} from '@/enums/LogoTypeEnum';

/** Футер сайта. */
const Footer: FC = (): JSX.Element => {
    return (
    <footer className={styles.footer} id="footer">
        <div className={styles.content}>
            <Logo
            type={LogoType.FOOTER}
            className={styles.logo}
            />

            <div className={styles.numberBox}>
                <Tel className={styles.number}/>

                <span className={styles.available}>
					Прием заявок 24 на 7
				</span>

                <a href={`mailto:${email}`} className={styles.mail}>
                    {email}
                </a>
            </div>

            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li>
                        <a href="#benefits" className={styles.link}>
                            Почему мы
                        </a>
                    </li>
                    <li>
                        <a href="#about" className={styles.link}>
                            Что это такое?
                        </a>
                    </li>
                    <li>
                        <a href="#steps" className={styles.link}>
                            Как мы работаем
                        </a>
                    </li>
                    <li>
                        <a href="#equipment" className={styles.link}>
                            Обзор
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.link}>
                            Описание работ
                        </a>
                    </li>
                    <li>
                        <a href="#numbers" className={styles.link}>
                            Мы в цифрах
                        </a>
                    </li>
                    <li>
                        <a href="#action" className={styles.link}>
                            Наша бригада
                        </a>
                    </li>
                    <li>
                        <a href="#footer" className={styles.link}>
                            Контакты
                        </a>
                    </li>
                </ul>
            </nav>

            <div>
                <SocialList
                socialListData={socialListData}
                className={styles.socialsList}
                />

                <span className={styles.socialsText}>
					Следите за новостями, акциями и скидками, в наших социальных сетях
				</span>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
