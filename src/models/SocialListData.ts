import {SocialsListData} from '@/components/common/SocialList/ISocialListData';

import {instagramLink, telegramLink, whatsAppLink} from '@/globalParams';

import ImageTelegramLogo  from '../assets/images/socials/telegram.png'
import ImageInstagramLogo from '../assets/images/socials/instagram.png'
import ImageWhatsAppLogo  from '../assets/images/socials/whatsApp.png'

/** Данные для списка социальных сетей. */
export const socialListData: SocialsListData[] = [
    {
        id:         1,
        imagePath:  ImageTelegramLogo,
        url:        telegramLink,
        alt:        'Telegram',
    },

    {
        id:         2,
        imagePath:  ImageInstagramLogo,
        url:        instagramLink,
        alt:        'Instagram',
    },

    {
        id:         3,
        imagePath:  ImageWhatsAppLogo,
        url:        whatsAppLink,
        alt:        'WhatsApp',
    },
];
