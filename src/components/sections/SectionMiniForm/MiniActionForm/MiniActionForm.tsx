'use client'

import React, {FC, JSX} from 'react';
import styles from './MiniActionForm.module.scss';
import useActionForm from '@/components/sections/SectionAction/ActionForm/useActionForm';
import ActionBtn from '@/components/sections/SectionAction/ActionBtn/ActionBtn';
import PrimaryBtn from '@/components/UI/buttons/PrimaryBtn/PrimaryBtn';

/** Форма отправки пользовательских данных. */
const MiniActionForm: FC = (): JSX.Element => {

	const {
		handleSubmit,
		onChangeName,
		onChangeTel,
		name,
		msg,
		refErrorMsg,
		tel,
	} = useActionForm();

	return (
	<form
	action="#"
	method="post"
	className={styles.form}
	id="action__mini-form"
	onSubmit={handleSubmit}
	>

		<div className={styles.inputBox}>
			<input
			type="text"
			inputMode="numeric"
			className={styles.input}
			id="input-phone"
			name="phone"
			placeholder="Номер телефона"
			value={tel}
			onInput={onChangeTel}
			required
			/>

			<span
			className={styles.error}
			ref={refErrorMsg}
			>
           {msg}
        </span>

			<input
			type="text"
			className={styles.input}
			name="name"
			placeholder="Имя"
			value={name}
			onInput={onChangeName}
			required
			/>
		</div>

		<ActionBtn
		type="submit"
		className={styles.btn}
		>
			Заказать замер
		</ActionBtn>

	</form>
	);
}

export default MiniActionForm;
