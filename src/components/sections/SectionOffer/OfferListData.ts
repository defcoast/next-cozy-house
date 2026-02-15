export interface IOfferListData {
    id:   number;
    icon: string;
    text: string;
}

export const offerListData: IOfferListData[] = [
    {
        id: 1,
        icon: 'Roulete',
        text: 'бесплатный замер',
    },
    {
        id: 2,
        icon: 'Discount',
        text: 'скидки на материалы до 20%',
    },
    {
        id: 3,
        icon: 'Speed',
        text: '250 м² за день',
    },
];
