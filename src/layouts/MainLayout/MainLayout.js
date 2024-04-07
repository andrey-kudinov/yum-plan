import Header from '@/components/Header/Header'
import styles from './MainLayout.module.css'

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className={styles['main']}>
        {children}
      </main>
    </>
  )
}