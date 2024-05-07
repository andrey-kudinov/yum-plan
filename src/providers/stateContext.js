'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

const stateContext = createContext()

export default function StateProvider({ children }) {
  const { data: session } = useSession()
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(session?.user)
  }, [session?.user])

  return (
    <stateContext.Provider value={{ user, setUser }}>
      {children}
    </stateContext.Provider>
  )
}

export function useStateContext() {
  return useContext(stateContext)
}