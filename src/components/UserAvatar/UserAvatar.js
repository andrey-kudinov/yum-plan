import Image from 'next/image'
import styles from './UserAvatar.module.css'

export default function UserAvatar({ avatar }) {
  return (
    <div className={styles['user-avatar']}>
      <div className={styles.container}>
        <Image
          unoptimized
          loader={() => typeof avatar === 'string' ? 
            avatar : URL.createObjectURL(avatar)}
          src={typeof avatar === 'string' ?
            avatar : URL.createObjectURL(avatar)}
          alt="Аватар"
          width={80}
          height={80}
          className={styles['avatar-img']}
        />
      </div>
    </div>
  )
}