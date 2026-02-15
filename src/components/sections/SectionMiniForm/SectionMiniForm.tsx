import MiniActionForm from '@/components/sections/SectionMiniForm/MiniActionForm/MiniActionForm';
import {FC, JSX} from 'react';
import styles from './SectionMiniForm.module.scss';
import Wrapper from '@/components/common/Wrapper/Wrapper';
import PaintedText from '@/components/common/PaintedText/PaintedText';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';

/** Секция мини-формы */
const SectionMiniForm: FC = (): JSX.Element => {
	return (
		<section className={styles.section}>
			<Wrapper>
				<h2
				className={styles.formTitle}
				>
					Закажите
					<PaintedText
					color={SiteColorsEnum.WHITE}
					>
						бесплатный замер
					</PaintedText>
				</h2>
				<MiniActionForm />
			</Wrapper>
		</section>

	);
}

export default SectionMiniForm;
