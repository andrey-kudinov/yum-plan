import styles from './RegistrationForm.module.css'

export default function RegistrationForm() {
  return (
    <form className={styles['registration-form']}>
      <label>Ваше имя</label>
      <input type="text" />
      <label>E-mail</label>
      <input type="text"/>
      <label>Пароль</label>
      <input type="password"/>
      <button type="submit" >Зарегистрироваться</button>
    </form>
  )
}