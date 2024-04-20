import { useSession } from 'next-auth/react'
import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout/MainLayout'
import styles from './profile.module.css'

export default function Profile() {
  const { data: session } = useSession()
  if (!session) return

  const onSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const response = await fetch('/api/user-settings-submit', {
      method: 'POST',
      body: formData
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <MainLayout>
      <Head>
        <title>YumPlan! Настройки профиля</title>
      </Head>
      <h2 className={styles.title}>Настройки профиля</h2>
      <form
        onSubmit={onSubmit}
        className={styles.form}
      >
        <label
          htmlFor="username"
          className={styles.label}
        >
          Имя пользователя
        </label>
        <input
          type="text"
          name="username"
          className={styles.input}
          defaultValue={session.user.name}
        />
        <button
          type="submit"
          className={styles['submit-button']}
        >
          Сохранить
        </button>
      </form>
    </MainLayout>
  )
}