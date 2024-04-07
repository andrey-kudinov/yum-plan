import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import headerLogoImg from 'public/images/yum-plan-logo.png'
import styles from './Header.module.css'

export default function Header() {
  const { data: session } = useSession()
  
  if (session) {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image
            src={headerLogoImg}
            alt="YumPlan! logo"
            className={styles['logo-img']}
            priority={true}
          />
        </div>
        <div className={styles.menu}>
          <Link className={styles['menu-link']} href="/">Поесть</Link>
          <Link className={styles['menu-link']} href="/">Купить</Link>
          <Link className={styles['menu-link']} href="/">Рецепты</Link>
        </div>
        <div className={styles['user-panel']}>
          <span className={styles['user-name']}>{session.user.name}</span>
          <div>
            <Link className={styles['user-link']} href="/profile">Настройки</Link>
            <Link className={styles['user-link']} href="/api/auth/signout">Выйти</Link>
          </div>
        </div>
      </div>
    )
  }
}