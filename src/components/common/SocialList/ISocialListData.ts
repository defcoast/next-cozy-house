import {StaticImageData} from 'next/image';

/** Интерфейс модели данных для списка социальных сетей. */
export interface SocialsListData {
    /** Идентификатор социальной сети. */
    id: number;

    /** Наименование изображения. */
    alt: string;

    /** Путь к изображению. */
    imagePath: string | StaticImageData;

    /** Адрес ссылки на социальную сеть. */
    url: string;
}
