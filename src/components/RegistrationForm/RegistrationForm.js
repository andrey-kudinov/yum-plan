import FormInput from '@/components/FormInput/FormInput'
import FormButton from '@/components/FormButton/FormButton'
import styles from './RegistrationForm.module.css'

export default function RegistrationForm() {
  return (
    <form className={styles['registration-form']}>
      <label htmlFor="user-name">
        Ваше имя
        <span className={styles['text-error']}>
          Это поле обязательно
        </span>
      </label>
      <FormInput inputType='text' name="user-name"/>
      <label htmlFor="user-email">
        E-mail
        <span className={styles['text-error']}>
          Это поле обязательно
        </span>
      </label>
      <FormInput inputType='text' name="user-email"/>
      <label htmlFor="user-password">
        Пароль
        <span className={styles['text-error']}>
          Это поле обязательно
        </span>
      </label>
      <FormInput inputType='password' name="user-password"/>
      <FormButton>Зарегистрироваться</FormButton>
    </form>
  )
}