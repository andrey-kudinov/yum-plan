import Link from 'next/link'
import styles from './NavButton.module.css'

export default function NavButton({ button, href, children }) {
  if (!href || !children) return null
  
  if (button) return (
    <Link
    href={href}
    >
      <button className={styles.button}>
        {children}
      </button>
    </Link>
  )
  
  return (
    <Link
      href={href}
    >
      {children}
    </Link>
  )
}