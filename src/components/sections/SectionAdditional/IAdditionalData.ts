import {StaticImageData} from 'next/image';

export interface IAdditionalData {
    /** Идентификатор дополнительной услуги. */
    id: number;

    /** Изображение дополнительной услуги. */
    img: string | StaticImageData;

    /** Заголовок дополнительной услуги. */
    title: string;
}
