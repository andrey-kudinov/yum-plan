import RegLayout from '@/layouts/RegLayout/RegLayout'
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm'
import Link from 'next/link'
import styles from './registration.module.css'


export default function Registration() {
  return (
    <RegLayout>
      <div className={styles['registration']}>
        <h1>Регистрация</h1>
        <RegistrationForm />
        <span>Уже есть аккаунт? <Link href="/login">Войти</Link></span>
      </div>
    </RegLayout>
  )
}