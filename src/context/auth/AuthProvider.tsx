import {
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { AuthContext } from './AuthContext'
import type { AuthContextValue, AuthUser } from '../../types/auth.types'

const USER_STORAGE_KEY = 'auth_user'

const demoUser: AuthUser = {
  id: '1',
  fullName: 'Demo Admin',
  email: 'admin@example.com',
  role: 'admin',
  permissions: [
    'posts.view',
    'posts.create',
    'posts.edit',
    'posts.delete',
    'employees.view',
    'notifications.view',
  ],
}

type AuthProviderProps = {
  children: ReactNode
}

function getSavedUser(): AuthUser | null {
  const savedUser = localStorage.getItem(USER_STORAGE_KEY)

  if (!savedUser) {
    return null
  }

  try {
    return JSON.parse(savedUser) as AuthUser
  } catch {
    localStorage.removeItem(USER_STORAGE_KEY)
    return null
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(() => getSavedUser())

  const login = useCallback((userData?: AuthUser): void => {
    const currentUser = userData ?? demoUser

    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(currentUser))
    setUser(currentUser)
  }, [])

  const logout = useCallback((): void => {
    localStorage.removeItem(USER_STORAGE_KEY)
    setUser(null)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: Boolean(user),
      isLoading: false,
      user,
      login,
      logout,
    }),
    [user, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}