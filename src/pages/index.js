import { useSession, signOut } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()
  
  if (session) {
    return (
      <>
        <h1>Добро пожаловать, {`${session.user.name} / ${session.user.email}`}</h1>
        <button onClick={() => signOut()}>Выйти</button>
      </>
    )
  }  
}