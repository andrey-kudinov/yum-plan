import { createContext } from 'react'
import { useSession } from 'next-auth/react'

export const UserContext = createContext({
  name: null,
  email: null,
  image: null
})

export default function UserContextProvider({ children }) {
  const { data: session } = useSession()
  if (!session) return

  const { name, email, image } = session.user

  return (
    <UserContext.Provider value={{
      name,
      email,
      image
    }}>
      {children}
    </UserContext.Provider>
  )
}