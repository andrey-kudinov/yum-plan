import Head from 'next/head'
import { useRouter } from 'next/router'
import MainLayout from '@/layouts/MainLayout/MainLayout'
import NavButton from '@/components/NavButton/NavButton'
import CreateRecipeForm from '@/components/CreateRecipeForm/CreateRecipeForm'
import styles from './create.module.css'

export default function CreateRecipe() {
  const router = useRouter()
  
  return (    
    <MainLayout>
      <Head>
        <title>YumPlan! Добавить рецепт</title>
      </Head>
      <NavButton onClick={() => router.back()}>
        &larr; Назад к рецептам
      </NavButton>
      <h2 className={styles.title}>Добавить рецепт</h2>
      <CreateRecipeForm/>
    </MainLayout>
  )
}