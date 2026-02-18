import {FC, JSX} from 'react';
import Wrapper from '@/components/common/Wrapper/Wrapper';
import styles from './SectionAbout.module.scss';
import PaintedText from '@/components/common/PaintedText/PaintedText';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
// import Image from 'next/image';

// import imgIgor from './igor.jpg';

/** Секция: "О нашей компании". */
const SectionAboutMe: FC = (): JSX.Element => {
	return (
	<section id="about-me" className={styles.section}>
		<Wrapper>
			<h2 className={styles.title}>
				<PaintedText
				color={SiteColorsEnum.BLACK}
				>
					Пару слов
				</PaintedText>
				{' '}о нашей компании
			</h2>

			<div className={styles.content}>
				{/*<Image*/}
				{/*src={imgIgor}*/}
				{/*alt="Фото сотрудников компании"*/}
				{/*sizes="(max-width: 768px) 100vw, 380px"*/}
				{/*loading="lazy"*/}
				{/*fetchPriority="low"*/}
				{/*className={styles.img}*/}
				{/*/>*/}

				<div className={styles.paragraphs}>
					<p className={styles.paragraph}>Меня зовут Игорь, и я руковожу компанией «Уютный Дом»</p>

					<b className={styles.paragraph}>Как мы работаем:</b>

					<p className={styles.paragraph}>Первое и главное — мы озвучиваем цену до начала работ и фиксируем её в договоре. Никаких сюрпризов в процессе. Если вдруг мы сами допустили ошибку — исправляем за свой счёт, это наша политика.</p>

					<p className={styles.paragraph}>Материалы закупаем оптом напрямую с завода-производителя большими объёмами. Поэтому у нас на складе всегда есть нужный материал, и цена для клиента получается ниже, чем в рознице.</p>

					<p className={styles.paragraph}>У нас в компании работают 9 бригад, и каждый мастер перед выходом на объекты проходит специальное обучение. Поэтому качество на всех наших объектах одинаково высокое — проверено годами работы.</p>

					<p className={styles.paragraph}>Мы не прячемся за красивыми фотографиями из интернета. Приглашаем всех клиентов посетить наши действующие объекты, чтобы своими глазами убедиться в качестве. Нет машины? Не проблема — наш человек заберёт вас, отвезёт на объект, всё покажет и привезёт обратно. Так же у нас есть социальные сети и мессенджеры где мы ведем блог, там так же можно ознакомиться с качеством наших услуг.</p>

					<p className={styles.paragraph}>Деньги берём только после того, как вы примете работу и убедитесь, что всё сделано как надо. Никаких предоплат за воздух.</p>

					<p className={styles.paragraph}>Даже если штукатурка или стяжка треснула по негарантийному случаю — всё равно бесплатно выезжаем и помогаем избавиться от трещин и дефектов. Потому что нам важна наша репутация и ваше спокойствие.</p>

					<p className={styles.paragraph}>Можем сделать комплексный ремонт под ключ: возвести перегородки, выполнить черновые и чистовые работы, довести до финиша. В штате есть дизайнер, который спроектирует ваше помещение. У нас работают лучшие плиточники Владивостока — мастера своего дела с золотыми руками.</p>

					<p className={styles.paragraph}>Хотите убедиться сами? Звоните, покажем объекты!</p>
				</div>
			</div>
		</Wrapper>
	</section>
	);
}

export default SectionAboutMe;
