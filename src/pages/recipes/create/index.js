import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout/MainLayout'
import NavButton from '@/components/NavButton/NavButton'
import CreateRecipeForm from '@/components/CreateRecipeForm/CreateRecipeForm'
import styles from './create.module.css'

export default function CreateRecipe() {
  return (    
    <MainLayout>
      <Head>
        <title>YumPlan! Добавить рецепт</title>
      </Head>
      <h2 className={styles.title}>Добавить рецепт</h2>
      <NavButton
        button
        href="/recipes"
      >
        &larr; Назад к рецептам
      </NavButton>
      <CreateRecipeForm/>
    </MainLayout>
  )
}