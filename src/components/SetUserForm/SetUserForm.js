import { useRef, useState } from 'react'
import { useStateContext } from '@/providers/stateContext'
import { z } from 'zod'
import Image from 'next/image'
import styles from './SetUserForm.module.css'

export default function SetUserForm() {
  const [selectedAvatar, setSelectedAvatar] = useState(null)
  const useravatarRef = useRef()
  const [buttonLoading, setButtonLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const { user, setUser } = useStateContext()
  if (!user) return null
  
  const onChangeAvatar = (e) => {
    setSelectedAvatar(e.target.files[0])
    useravatarRef.current.value = null
  }

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
      <label
        htmlFor="useravatar"
        className={styles.label}
      >
        Аватар
      </label>
      <div className={styles['avatar-block']}>
        {selectedAvatar && <>
          <div className={styles['user-avatar']}>
            <div className={styles.container}>
              <Image
                unoptimized
                loader={() => URL.createObjectURL(selectedAvatar)}
                src={URL.createObjectURL(selectedAvatar)}
                alt="Аватар"
                width={80}
                height={80}
                className={styles['avatar-img']}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSelectedAvatar(null)}
            className={styles['avatar-cancel']}
          >
            Отмена
          </button>
        </>}
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