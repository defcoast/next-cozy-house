import {IAdditionalData} from './IAdditionalData';
import ImageAdditional0 from '../../../assets/images/additional/service_0.webp'
import ImageAdditional1 from '../../../assets/images/additional/service_1.webp'
import ImageAdditional2 from '../../../assets/images/additional/service_2.webp'
import ImageAdditional4 from '../../../assets/images/additional/service_4.webp'
import ImageAdditional5 from '../../../assets/images/additional/service_5.webp'

/** Данные списка "Дополнительные услуги." */
export const AdditionalData: IAdditionalData[] = [
    {
        id:    1,
        img:   ImageAdditional0,
        title: 'Плиточные работы',
    },
	{
		id:    2,
		img:   ImageAdditional1,
		title: 'Электромонтажные работы',
	},

    {
        id:    3,
        img:   ImageAdditional2,
        title: 'Сантехнические работы',
    },

    {
        id:    4,
        img:   ImageAdditional4,
        title: 'Возведение перегородок',
    },

    {
        id:    5,
        img:   ImageAdditional5,
        title: 'Демонтаж',
    },
];
