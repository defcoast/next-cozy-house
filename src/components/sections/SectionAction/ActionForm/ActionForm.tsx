import React, {FC, JSX} from 'react';
import styles from '../SectionAction.module.scss';
import ActionBtn from '../ActionBtn/ActionBtn';
import useActionForm from '@/components/sections/SectionAction/ActionForm/useActionForm';

/** Форма отправки пользовательских данных. */
const ActionForm: FC = (): JSX.Element => {

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
    id="action__form"
    onSubmit={handleSubmit}
    >
        <h3 className={styles.formTitle}>
            Вызовите замерщика бесплатно или получите консультацию
        </h3>

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

        <ActionBtn
        type="submit"
        className={styles.btn}
        >
            Вызвать замерщика бесплатно
        </ActionBtn>
    </form>
    );
}

export default ActionForm;
