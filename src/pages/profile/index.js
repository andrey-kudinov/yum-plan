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
    const data = {
      name: e.target.username.value
    }
    
    try {
      const response = await fetch('/api/userset', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log('response ok:', response.ok)
      const json = await response.json()
      console.log('response:', json.message)
      setButtonEnabled(true)
    }
    catch (error) {
      console.log('error:', error.message)
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