export interface IOfferListData {
    id:   number;
    icon: string;
    text: string;
}

export const offerListData: IOfferListData[] = [
    {
        id: 1,
        icon: 'City',
        text: 'Владивосток и Приморский край',
    },
    {
        id: 2,
        icon: 'Price',
        text: 'Фиксированная цена 1 200 ₽ за м²',
    },
    {
        id: 3,
        icon: 'Guaranty',
        text: 'Гарантия 3 года',
    },
];
