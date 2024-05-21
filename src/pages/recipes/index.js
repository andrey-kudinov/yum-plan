import Head from 'next/head'
import { useRouter } from 'next/router'
import MainLayout from '@/layouts/MainLayout/MainLayout'
import NavButton from '@/components/NavButton/NavButton'
import styles from './recipes.module.css'

export default function Recipes() {
  const router = useRouter()
  
  return (    
    <MainLayout>
      <Head>
        <title>YumPlan! Рецепты</title>
      </Head>
      <h2 className={styles.title}>Рецепты</h2>
      <NavButton onClick={() => router.push('/recipes/create')}>
        Создать рецепт &#43;
      </NavButton>
    </MainLayout>
  )
}