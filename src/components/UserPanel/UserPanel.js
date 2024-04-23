import { signOut } from 'next-auth/react'
import { useContext } from 'react'
import { UserContext } from '@/providers/UserContext'
import Link from 'next/link'
import Image from 'next/image'
import settingsImg from 'public/icons/settings.svg'
import signoutImg from 'public/icons/signout.svg'
import styles from './UserPanel.module.css'

export default function UserPanel() {
  const session = useContext(UserContext)
  const handleSignOut = async () => {
    "use server"
    await signOut()
  }
  
  return (
    <div className={styles['user-panel']}>
      <div className={styles['user-avatar']}>
        <div className={styles.container}>
          <Image
            unoptimized
            loader={() => session.image}
            src={session.image}
            alt="Аватар"
            width={50}
            height={50}
            className={styles['avatar-img']}
          />
        </div>
      </div>
      <div className={styles['user-name']}>{session.name}</div>
      <div className={styles['user-links']}>
        <Link
          href="/profile"
          title="Настройки"
        >
          <Image
            src={settingsImg}
            alt="Настройки"
            className={styles['settings-img']}
          />
        </Link>
        <button
          onClick={handleSignOut}
          className={styles['signout-button']}
          title="Выйти"
        >
          <Image
            src={signoutImg}
            alt="Выйти"
            className={styles['signout-img']}
          />
        </button>
      </div>
    </div>
  )
}