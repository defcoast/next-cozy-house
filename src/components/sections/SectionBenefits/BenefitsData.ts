import styles from './SectionBenefits.module.scss';


export interface IBenefitsData {
    id:           number;
    text:         string;
    specialText?: string;
    icon:         string;
}

export const benefitsData: IBenefitsData[] = [
    {
        id:           1,
        text:         'Приятные цены и',
        specialText:  'высочайшее качество.',
        icon:         styles.iconTypeMoney,
    },

    {
        id:    2,
        text: 'Работаем в соответствии с нормами по договору. Гарантия 3 года.',
        icon: styles.iconTypeCounter,
    },

    {
        id:    3,
        text: 'Выезд замерщика бесплатно в любое время.',
        icon: styles.iconTypeCar,
    },

    {
        id:    4,
        text: 'Мы используем качественные материалы по оптовой цене.',
        icon: styles.iconTypeWallet,
    },
];



