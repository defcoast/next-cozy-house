import {IAdditionalData} from './IAdditionalData';
import ImageAdditional1 from '../../../assets/images/additional/service_1.webp'
import ImageAdditional2 from '../../../assets/images/additional/service_2.webp'
import ImageAdditional4 from '../../../assets/images/additional/service_4.webp'
import ImageAdditional5 from '../../../assets/images/additional/service_5.webp'
import ImageAdditional6 from '../../../assets/images/additional/service_6.webp'

/** Данные списка "Дополнительные услуги." */
export const AdditionalData: IAdditionalData[] = [
    {
        id:    1,
        img:   ImageAdditional1,
        title: 'Электромонтажные работы',
    },

    {
        id:    2,
        img:   ImageAdditional2,
        title: 'Сантехнические работы',
    },

    {
        id:    3,
        img:   ImageAdditional4,
        title: 'Возведение перегородок',
    },

    {
        id:    4,
        img:   ImageAdditional5,
        title: 'Демонтаж',
    },

    {
        id:    5,
        img:   ImageAdditional6,
        title: 'Полусухая стяжка пола',
    },
];
