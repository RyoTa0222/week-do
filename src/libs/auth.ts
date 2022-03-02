import firebaseApp from '@/libs/firebase'
import {
  getAuth,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signOut,
} from 'firebase/auth'
import { User } from '@/types'

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const twitterProvider = new TwitterAuthProvider()

/**
 * メールアドレスとパスワードを用いた認証
 * @param email
 * @param password
 * @returns {Promise<unknown>}
 */
const loginWithEmail = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    const auth = getAuth(firebaseApp)
    signInWithEmailAndPassword(auth, email, password)
      .then(() => resolve(true))
      .catch((error) => {
        // TODO
        const errorCode = error.code
        const errorMessage = error.message
        reject(error)
      })
  })
}

/**
 * Googleを用いた認証
 * @returns {void}
 */
const loginWithGoogle = () => {
  const auth = getAuth(firebaseApp)
  signInWithRedirect(auth, googleProvider)
}

/**
 * Githubを用いた認証
 * @returns {void}
 */
const loginWithGithub = () => {
  const auth = getAuth(firebaseApp)
  signInWithRedirect(auth, githubProvider)
}

/**
 * Twitterを用いた認証
 * @returns {void}
 */
const loginWithTwitter = () => {
  const auth = getAuth(firebaseApp)
  signInWithRedirect(auth, twitterProvider)
}

/**
 * ログアウト処理
 * @returns {Promise<unknown>}
 */
const logout = () => {
  return new Promise((resolve, reject) => {
    const auth = getAuth(firebaseApp)
    signOut(auth)
      .then(() => resolve(true))
      .catch((error) => reject(error))
  })
}

/**
 * 認証情報の変更を検知
 * @param callback
 */
const onAuthStateChanged = (callback: (user: User | null) => void) => {
  const auth = getAuth(firebaseApp)
  onFirebaseAuthStateChanged(auth, (user: any) => {
    console.log('onAuthStateChanged')
    console.log(`email: ${user?.email}`)
    console.log(`uid: ${user?.uid}`)
    console.log(`displayName: ${user?.displayName}`)
    console.log(`photoURL: ${user?.photoURL}`)
    const userInfo: User | null = user
      ? {
          displayName: user?.displayName,
          email: user?.email,
          uid: user?.uid,
          photoURL: user?.photoURL,
          token: user?.token,
          refreshToken: user?.refreshToken,
        }
      : null
    callback(userInfo)
  })
}

export {
  loginWithEmail,
  logout,
  onAuthStateChanged,
  loginWithGoogle,
  loginWithGithub,
  loginWithTwitter,
}
