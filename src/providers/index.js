'use client'

import UserContextProvider from './UserContext'

export default function Providers({ children }) {
  return(
    <UserContextProvider>
      {children}
    </UserContextProvider>
  )
}