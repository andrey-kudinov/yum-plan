import { useRef, useState } from 'react'
import { useStateContext } from '@/providers/stateContext'
import { z } from 'zod'
import UserAvatar from '@/components/UserAvatar/UserAvatar'
import styles from './SetUserForm.module.css'

export default function SetUserForm() {
  const [selectedAvatar, setSelectedAvatar] = useState(null)
  const useravatarRef = useRef()
  const [buttonLoading, setButtonLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const { user, setUser } = useStateContext()
  if (!user) return null
  
  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  const onChangeAvatar = (e) => {
    setSelectedAvatar(e.target.files[0])
    useravatarRef.current.value = null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setButtonLoading(true)
    setMessage(null)
    
    const data = {
      name: e.target.username.value.trim(),
      image: selectedAvatar ? await toBase64(selectedAvatar) : user.image
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
      setUser({...user, name: data.name, image: data.image})
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
      <label
        htmlFor="useravatar"
        className={styles.label}
      >
        Сменить аватар
      </label>
      <div className={styles['avatar-block']}>
        {!selectedAvatar &&
          <input
            ref={useravatarRef}
            type="file"
            name="useravatar"
            title=" "
            accept="image/*"
            capture="user"
            onChange={onChangeAvatar}
            className={styles['avatar-input']}
        />}
        {selectedAvatar && <>
          <UserAvatar avatar={selectedAvatar} />
          <button
            type="button"
            onClick={() => setSelectedAvatar(null)}
            className={styles['avatar-cancel']}
          >
            Отмена
          </button>
        </>}
      </div>
      <button
        type="submit"
        className={styles['submit-button']}
        disabled={buttonLoading}
      >
        {!buttonLoading && 'Сохранить'}
        {buttonLoading && '...'}
      </button>
      <span className={styles.message}>{message}</span>
    </form>
  )
}