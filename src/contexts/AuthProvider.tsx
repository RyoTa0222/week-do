import { createContext, useEffect, useState, useContext, useMemo } from 'react'
import { User } from '@/types'
import * as auth from '@/libs/auth'
import { useRouter } from 'next/router'

type AuthContextProps = {
  user: User | null | undefined
  loginWithEmail?: (email: string, password: string) => Promise<void>
  loginWithGoogle?: () => void
  loginWithGithub?: () => void
  loginWithTwitter?: () => void
  logout?: () => Promise<void>
  isLogin: boolean
}

const AuthContext = createContext<AuthContextProps>({
  user: undefined,
  isLogin: false,
})

export const AuthProvider: React.FC = ({ children }) => {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  )

  // ログイン中かどうかのフラグ
  const isLogin = useMemo(() => {
    return Boolean(currentUser === null)
  }, [currentUser])

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // ログイン状態が変化すると呼ばれる
      console.log('user:')
      console.log(user)
      setCurrentUser(user)
      // 未認証
      if (user === null && router.pathname !== '/login') {
        router.push({
          pathname: '/login',
          query: { from: router.pathname },
        })
      }
      // 認証
      if (user !== null) {
        // ページ遷移
        if (router.query && router.query.from) {
          router.push(router.query.from as string)
        } else {
          router.push('/')
        }
      }
    })
  }, [])

  const loginWithEmail = async (email: string, password: string) => {
    try {
      await auth.loginWithEmail(email, password)
    } catch (err) {
      //
    }
  }

  const logout = async () => {
    try {
      await auth.logout()
    } catch (err) {
      //
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        loginWithEmail,
        loginWithGoogle: auth.loginWithGoogle,
        loginWithGithub: auth.loginWithGithub,
        loginWithTwitter: auth.loginWithTwitter,
        logout,
        isLogin,
      }}
    >
      {currentUser === undefined ? <></> : children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
