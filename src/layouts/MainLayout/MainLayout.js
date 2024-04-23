import Providers from '@/providers'
import Header from '@/components/Header/Header'
import styles from './MainLayout.module.css'

export default function MainLayout({ children }) {
  return (
    <Providers>
      <Header />
        <main className={styles['main']}>
          {children}
        </main>
    </Providers>
  )
}