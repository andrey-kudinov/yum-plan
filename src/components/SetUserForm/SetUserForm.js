'use client'

import { useState } from 'react'
import styles from './SetUserForm.module.css'
export default function SetUserForm() {
  const [buttonLoading, setButtonLoading] = useState(false)
  const [message, setMessage] = useState('')
  
  const onSubmit = async (e) => {
    e.preventDefault()
    setButtonLoading(true)
    
    const data = {
      name: e.target.username.value
    }
    try {
      const response = await fetch('/api/setuser', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
      setMessage(json.message)
    }
    catch (error) {
      setMessage(error.message)
    }
    setButtonLoading(false)
  }

  return(
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
        // defaultValue={session.name}
      />
      <button
        type="submit"
        className={styles['submit-button']}
        disabled={buttonLoading}
      >
        {!buttonLoading && 'Сохранить'}
        {buttonLoading && '...'}
      </button>
      <div className={styles.message}>{message}</div>
    </form>
  )
}