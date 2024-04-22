import { useSession } from 'next-auth/react'
import { useState } from 'react'
import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout/MainLayout'
import styles from './profile.module.css'

export default function Profile() {
  const [buttonEnabled, setButtonEnabled] = useState(true)
  const { data: session } = useSession()
  if (!session) return

  const onSubmit = async (e) => {
    e.preventDefault()
    setButtonEnabled(false)
    const formData = new FormData()
    formData.set('name', e.target.username.value)
    
    try {
      const response = await fetch('/api/userset', {
        method: 'POST',
        body: formData
      })
      console.log('response:', response)
      setButtonEnabled(true)
    }
    catch (error) {
      console.log(error)
    }
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
          disabled={!buttonEnabled}
        >
          Сохранить
        </button>
      </form>
    </MainLayout>
  )
}