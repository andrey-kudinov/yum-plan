import MainLayout from '@/layouts/MainLayout/MainLayout'
import Head from 'next/head'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>YumPlan! Главная</title>
      </Head>
      <h2>Главная</h2>
    </MainLayout>
  )
}