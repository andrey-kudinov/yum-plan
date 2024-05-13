import { useState } from 'react'
import UserPanel from '@/components/UserPanel/UserPanel'
import Link from 'next/link'
import Image from 'next/image'
import headerImg from 'public/images/yum-plan-logo.png'
import styles from './Header.module.css'
import cl from 'classnames'

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const handleBurgerClick = () => setMenuActive(!menuActive);

  return (
    <header className={cl(styles.header, 'container')}>
      <div className={cl(styles.inner, menuActive && styles.open)}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={headerImg}
              alt="YumPlan! logo"
              className={styles['logo-img']}
              priority={true}
            />
          </Link>
        </div>
        <nav>
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

      <div className={styles['burger-container']}>
        <div className={styles.burger}>
          <input
            id="toggle"
            name="menu"
            type="checkbox"
            onChange={handleBurgerClick}
            />
          <label htmlFor="toggle">
            <span className={styles.burger}></span>
            <span className={cl(styles['burger-label'], 'sr-only')}>Menu</span>
          </label>		
        </div>
      </div>
    </header>
  )
}
