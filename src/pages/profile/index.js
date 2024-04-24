import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout/MainLayout'
import SetUserForm from '@/components/SetUserForm/SetUserForm'
import styles from './profile.module.css'

export default function Profile() {
  return (    
    <MainLayout>
      <Head>
        <title>YumPlan! Настройки профиля</title>
      </Head>
      <h2 className={styles.title}>Настройки профиля</h2>
      <SetUserForm/>
    </MainLayout>
  )
}