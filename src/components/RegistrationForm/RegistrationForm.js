import styles from './RegistrationForm.module.css'

export default function RegistrationForm() {
  return (
    <form className={styles['registration-form']}>
      <label>Ваше имя</label>
      <input className={styles['form-input']} type="text" />
      <label>E-mail</label>
      <input className={styles['form-input']} type="text"/>
      <label>Пароль</label>
      <input className={styles['form-input']} type="password"/>
      <button className={styles['form-button']} type="submit" >Зарегистрироваться</button>
    </form>
  )
}