import { useState } from 'react'
import { useStateContext } from '@/providers/stateContext'
import { z } from 'zod'
import styles from './SetUserForm.module.css'

export default function SetUserForm() {
  const [buttonLoading, setButtonLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const { user, setUser } = useStateContext()
  if (!user) return null
  
  const onSubmit = async (e) => {
    e.preventDefault()
    setButtonLoading(true)
    setMessage(null)
    
    const data = {
      name: e.target.username.value.trim()
    }

    try {
      const result = z.object({
        name: z.string()
          .min(1, 'Имя не менее одного символа')
          .max(30, 'Имя не более 30 символов')
      }).safeParse(data)
      
      if(!result.success) throw result.error.issues

      const response = await fetch('/api/changeuser', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
      setMessage(json.message)
      setUser({...user, name: data.name})
    }
    catch (error) {
      setMessage(error.map(e => e.message).join('<br>'))
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
        defaultValue={user.name}
        required
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