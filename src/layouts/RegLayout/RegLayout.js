import styles from './RegLayout.module.css'

export default function RegLayout({ children }) {
  return (
    <main className={styles['main-registration']}>
      {children}
    </main>
  )
}