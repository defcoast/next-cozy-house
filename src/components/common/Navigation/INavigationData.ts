/** Интерфейс элемента навигации. */
export interface INavigationData {
    /** Идентификатор элемента. */
    id: number

    /** Якорная ссылка на секцию. */
    anchor: string;

    /** Текст элемента. */
    text: string;
}
