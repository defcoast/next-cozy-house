import {IStepData} from './IstepData';
import styles from './SectionSteps.module.scss'

/** Данные для списка шагов. */
export const StepData: IStepData[] = [
    {
        id:          1,
        iconStyle:   styles.numberIconCar,
        title:       'Расчет стоимости работ',
        description: 'Приедем на ваш объект, БЕСПЛАТНО выполним необходимые замеры и произведем расчет стоимости работ.',
    },

    {
        id:          2,
        iconStyle:   styles.numberIconContract,
        title:       'Подписание договора на оказание услуг',
        description: 'В удобное для вас время, согласуем график работ и подпишем договор.',
    },

    {
        id:          3,
        iconStyle:   styles.numberIconDelivery,
        title:       'Доставка оборудования и начало работ',
        description: 'Наши специалисты приедут в согласованный день и время, и приступят к выполнению работ.',
    },

    {
        id:          4,
        iconStyle:   styles.numberIconPayment,
        title:       'Оплата после результата',
        description: 'Убедившись в качестве оказанных нами услуг вы производите оплату.',
    },
]
