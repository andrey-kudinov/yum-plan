import styles from './SigninLayout.module.css'

export default function SigninLayout({ children }) {
  return (
    <main className={styles['main-signin']}>
      {children}
    </main>
  )
}