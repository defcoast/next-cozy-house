import {FC, JSX} from 'react';
import {SocialsListData} from './ISocialListData';
import styles from './SocialList.module.scss';
import classNames from 'classnames';
import Image from 'next/image';

/** Интерфейс пропсов компонента. */
interface IProps {
    /** Данные списка соцсетей. */
    socialListData: SocialsListData[];

    /** Корневой класс компонента. */
    className?:     string;
}

/** Список социальных сетей. */
const SocialList: FC<IProps> = (
{
    socialListData,
    className,
}): JSX.Element => {
    return (
        <ul className={classNames(styles.socials, className)}>
            {socialListData.map((socialItem: SocialsListData) => (
                <li
                key={'socialList_' + socialItem.id}
                className={styles.social}
                >
                    <a
                    href={socialItem.url}
                    target="_blank"
                    className={styles.link}
                    rel="noreferrer"
                    >
                        <Image
                        src={socialItem.imagePath}
                        alt={socialItem.alt}
                        className={styles.img}
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default SocialList;
