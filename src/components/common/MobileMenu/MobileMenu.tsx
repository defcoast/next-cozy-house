import {FC, JSX} from 'react';
import styles from './MobileMenu.module.scss';
import Navigation from '../Navigation/Navigation';
import {navigationData} from '../Navigation/NavigationData';
import Tel from '../Tel/Tel';
import SocialList from '../SocialList/SocialList';
import {socialListData} from '@/models/SocialListData';
import PrimaryBtn from '../../UI/buttons/PrimaryBtn/PrimaryBtn';

/** Интерфейс пропсов компонента. */
interface IProps {
    /** Нужно ли отображать мобильное меню. */
    needShowMobileMenu?: boolean;
}

/** Мобильное меню. */
const MobileMenu: FC<IProps> = ({needShowMobileMenu}): JSX.Element => {
    return (
    <>
        {Boolean(needShowMobileMenu) &&
	        <div className={styles.mobileMenu}>
                {/** Кнопка перехода на форму. */}
		        <PrimaryBtn href="#action__form">
			        Вызвать замерщика бесплатно
		        </PrimaryBtn>

                {/** Навигация по сайту. */}
		        <Navigation navigationData={navigationData} isMobile={true} />

                {/** Номер телефона. */}
		        <Tel className={styles.number} />

                {/** Соцсети. */}
		        <SocialList socialListData={socialListData} className={styles.socials} />
	        </div>
        }
    </>
    );
}

export default MobileMenu;
