import {FC, JSX} from 'react';
import styles from './SectionQuiz.module.scss';
import Wrapper from '@/components/common/Wrapper/Wrapper';
import QuizBlock from '@/components/common/Quiz/QuizBlock';

/** Секция: "Квиз" */
const SectionQuiz: FC = (): JSX.Element => {
	return (
		<section id="quiz" className={styles.section}>
			<Wrapper>
				<QuizBlock />
			</Wrapper>
		</section>
	);
}

export default SectionQuiz;
