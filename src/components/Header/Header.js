import UserPanel from '@/components/UserPanel/UserPanel'
import Link from 'next/link'
import Image from 'next/image'
import headerLogoImg from 'public/images/yum-plan-logo.png'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={headerLogoImg}
            alt="YumPlan! logo"
            className={styles['logo-img']}
            priority={true}
          />
        </Link>
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
      <UserPanel />
    </div>
  )
}