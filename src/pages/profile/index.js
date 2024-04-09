import MainLayout from '@/layouts/MainLayout/MainLayout'
import styles from './profile.module.css'

export default function Profile() {
  return (
    <MainLayout>
      <h2 className={styles.title}>Настройки профиля</h2>
    </MainLayout>
  )
}