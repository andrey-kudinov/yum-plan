import { getToken } from 'next-auth/jwt'
import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method !== 'POST') return
  const token = await getToken({ req })
  const id = token.sub
  const { name } = req.body
  
  try {
    const user = await prisma.user.findFirst({
      where: { id }
    })
    if (!user) {
      res.status(404).json({ error: 'Пользователь не найден' })
    }
    
    await prisma.user.update({
      where: { id },
      data: { name }
    })
    res.status(200).json({ message: 'Настройки изменены' })
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: `Ошибка: ${error}` })
  }
}