import {FC, JSX} from 'react';
import styles from './SocialBox.module.scss';
import SocialList from '../../../common/SocialList/SocialList';
import {socialListData} from '@/models/SocialListData';

/** Блок социальных сетей. */
const SocialBox: FC = (): JSX.Element => {
    return (
        <div className={styles.socialsBox}>
            <p className={styles.text}>
                Следите за новостями, акциями и скидками, в наших социальных сетях
            </p>

            <SocialList
            className={styles.list}
            socialListData={socialListData}
            />
        </div>
    );
}

export default SocialBox;
