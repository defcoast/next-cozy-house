/** Интерфейс модели данных оборудования. */
export interface IEquipmentData {
    /** Идентификатор элемента. */
    id: number;

    /** Заголовок блока. */
    title: string;

    /** Список характеристик блока. */
    descriptionPoints: string[];

    /** Изображение блока. */
    image: string;
}
