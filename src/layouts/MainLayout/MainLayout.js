import Header from '@/components/Header/Header'
import styles from './MainLayout.module.css'
import cl from 'classnames'

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className={cl(styles.main, 'container')}>
        {children}
      </main>
    </>
  )
}