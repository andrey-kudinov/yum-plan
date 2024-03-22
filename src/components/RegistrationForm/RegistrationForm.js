import FormInput from '@/components/FormInput/FormInput'
import FormButton from '@/components/FormButton/FormButton'
import styles from './RegistrationForm.module.css'

export default function RegistrationForm() {
  return (
    <form className={styles['registration-form']}>
      <label>Ваше имя</label>
      <FormInput inputType='text'/>
      <label>E-mail</label>
      <FormInput inputType='text'/>
      <label>Пароль</label>
      <FormInput inputType='password'/>
      <FormButton>Зарегистрироваться</FormButton>
    </form>
  )
}