import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import headerLogoImg from 'public/images/yum-plan-logo.png'
import styles from './Header.module.css'

export default function Header() {
  const { data: session } = useSession()
  if (!session) return
  
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
      <nav className={styles['menu-nav']}>
        <ul className={styles.menu}>
          <li className={styles['menu-item']}>
            <Link className={styles['menu-link']} href="/">Поесть</Link>
          </li>
          <li className={styles['menu-item']}>
            <Link className={styles['menu-link']} href="/">Купить</Link>
          </li>
          <li className={styles['menu-item']}>
            <Link className={styles['menu-link']} href="/">Рецепты</Link>
          </li>
        </ul>
      </nav>
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