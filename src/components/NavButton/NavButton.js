import styles from './NavButton.module.css'

export default function NavButton({ children }) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}