'use client';

import {useState} from 'react';
import styles from './CostCalculator.module.scss';
import Wrapper from '@/components/common/Wrapper/Wrapper';

const BASE_AREA = 40;

const BASE_SCREED = 60000;
const BASE_PLASTER = 170000;

const STEP_AREA = 10;
const STEP_SCREED = 8000;
const STEP_PLASTER = 20000;

const MIN_AREA = 40;
const MAX_AREA = 150;

// todo Это в секции нужно пренести и переименовать, ну или разделить
export default function CostCalculator() {
	const [area, setArea] = useState<number>(40);

	const calcSteps = (value: number) => {
		if (value <= BASE_AREA) { return 0; }

		return Math.floor((value - BASE_AREA) / STEP_AREA);
	};

	const screedPrice = () => {
		const steps = calcSteps(area);

		return BASE_SCREED + steps * STEP_SCREED;
	};

	const plasterPrice = () => {
		const steps = calcSteps(area);

		return BASE_PLASTER + steps * STEP_PLASTER;
	};

	const format = (value: number) => {
		return value.toLocaleString('ru-RU');
	};

	const handleAnchor = (id: string): void => {
		const el = document.getElementById(id);
		if (null === el) { return; }

		el.scrollIntoView({behavior: 'smooth', block: 'start'});
	};

	return (
	<section className={styles.section}>
		<Wrapper>
			<h2 className={styles.title}>
				Приблизительная стоимость работ
			</h2>

			<p className={styles.subtitle}>
				Все цены указаны с учетом работы и материалов. Стоимость фиксируется и не меняется в процессе работ.
			</p>

			<div className={styles.calculator}>

				<div className={styles.areaValue}>
					{area} <span>м²</span>
				</div>

				<input
				className={styles.range}
				type="range"
				min={MIN_AREA}
				max={MAX_AREA}
				step={5}
				value={area}
				style={{
					'--progress': `${((area - MIN_AREA) / (MAX_AREA - MIN_AREA)) * 100}%`
				} as React.CSSProperties}
				onChange={(e) => setArea(Number(e.target.value))}
				/>

				<div className={styles.prices}>

					<div className={styles.card}>
						<span>Стяжка пола</span>
						<strong>от {format(screedPrice())} ₽</strong>
					</div>

					<div className={styles.card}>
						<span>Штукатурка стен</span>
						<strong>от {format(plasterPrice())} ₽</strong>
					</div>

				</div>

				<div className={styles.features}>
					<div>✔ С учетом материалов</div>
					<div>✔ Фиксированная цена</div>
					<div>✔ Без доплат</div>
				</div>

				<button
				className={styles.button}
				onClick={() => handleAnchor('action__form')}
				>
					Получить точный расчет
				</button>


				<p className={styles.note}>
					Расчет приблизительный. Итоговая стоимость зависит от состояния помещения.
				</p>
			</div>
		</Wrapper>
	</section>
	);
}
