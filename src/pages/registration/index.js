import Link from 'next/link'
import styles from './styles.module.css'

export default function Registration() {
  return (
    <div className={styles['registration']}>
      <h1>Регистрация</h1>
      <form className={styles['registration-form']}>
        <label>Ваше имя</label>
        <input type="text" />
        <label>E-mail</label>
        <input type="text"/>
        <label>Пароль</label>
        <input type="password"/>
        <button type="submit" >Зарегистрироваться</button>
        <span>Уже есть аккаунт? <Link href="/login">Войти</Link></span>
      </form>
    </div>
  )
}