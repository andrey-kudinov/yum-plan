import RegLayout from '@/layouts/RegLayout/RegLayout'
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm'
import Link from 'next/link'
import styles from './registration.module.css'


export default function Registration() {
  return (
    <RegLayout>
      <div className={styles['registration']}>
        <div className={styles['registration-block']}>
          <h1 className={styles['registration-title']}>Регистрация</h1>
          <RegistrationForm />
          <div className={styles['registration-already']}>
            Уже есть аккаунт? <Link href="/login">Войти</Link>
          </div>
        </div>
      </div>
    </RegLayout>
  )
}