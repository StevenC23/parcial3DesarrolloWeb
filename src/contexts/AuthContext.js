import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../utils/init-firebase'
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from 'firebase/auth'

const AuthContext = createContext({
  currentUser: null,
  signInWithGoogle: () => Promise,
  logout: () => Promise
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user ? user : null)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    console.log('El usuario es', currentUser)
  }, [currentUser])

  function logout() {
    return signOut(auth)
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const value = {
    currentUser,
    signInWithGoogle,
    logout
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
