/** Интерфейс модели данных блока "Мы в цифрах". */
export interface INumberData {
    /** Идентификатор элемента. */
    id: number;

    /** Отображаемая цифра. */
    number: number | string;

    /** Заголовок. */
    title: string | null;

    /** Подзаголовок. */
    subtitle: string;
}
