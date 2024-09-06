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
        text: 'Цена от 299р за квадрат',
    },
    {
        id: 3,
        icon: 'Guaranty',
        text: 'Гарантия 3 года',
    },
];
