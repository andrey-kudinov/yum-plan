'use client'

import { createContext, useContext } from 'react'
import { useSession } from 'next-auth/react'

const stateContext = createContext()

export default function StateProvider({ children }) {
  const { data: session } = useSession()
  //if (!session) return 

  const state = {
    user: session.user,
    setUser: (user) => this.user = {...user},
  }

  return (
    <stateContext.Provider value={state}>
      {children}
    </stateContext.Provider>
  )
}

export function useStateContext() {
  return useContext(stateContext)
}