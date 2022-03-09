import type { NextPage } from 'next'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import { useState, ChangeEvent, memo, useMemo } from 'react'
import useToggle from '@/hooks/useToggle'
import { IoMdEye, IoIosEyeOff } from 'react-icons/io'
import Pressable from '@/components/Pressable'
import { label, form } from '@/styles/form'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useAuthContext } from '@/contexts/AuthProvider'

const EyeIcon: React.VFC<{ visible: boolean }> = memo(({ visible }) => {
  return visible ? <IoIosEyeOff size="24px" /> : <IoMdEye size="24px" />
})

EyeIcon.displayName = 'EyeIcon'

const Login: NextPage = () => {
  const router = useRouter()
  const { loginWithEmail, loginWithGithub, loginWithGoogle, loginWithTwitter } =
    useAuthContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isMasked, toggleIsMasked] = useToggle(true)
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  // ボタンが活性状態かどうか
  const isDisabled = useMemo(() => {
    return !(email && password)
  }, [email, password])
  // ログイン処理
  const submit = (e: any) => {
    e.preventDefault()
    if (email && password) {
      loginWithEmail!(email, password)
    }
  }
  return (
    <div
      className="flex justify-center items-center flex-col max-w-lg m-auto mb-12"
      data-testid="login-page"
    >
      <Logo />
      <form className={`${form} m-auto mt-4`} onSubmit={submit}>
        {/* email */}
        <label htmlFor="email" className={label}>
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          data-testid="login-email-form"
          required
          onChange={handleChangeEmail}
          className="block border border-gray-900 focus:border-red-300 rounded w-full px-4 py-2"
        />
        {/* password */}
        <label htmlFor="password" className={`${label} mt-8`}>
          パスワード
        </label>
        <div className="relative">
          <input
            type={isMasked ? 'password' : 'text'}
            id="password"
            name="password"
            value={password}
            data-testid="login-password-form"
            required
            onChange={handleChangePassword}
            className="block border border-gray-900 focus:border-red-300 rounded w-full px-4 py-2"
          />
          <Pressable
            handleClick={toggleIsMasked}
            className="absolute right-2 top-2.5"
          >
            <EyeIcon visible={isMasked} />
          </Pressable>
        </div>
        <Button
          handleClick={() => {}}
          className="my-10"
          disabled={isDisabled}
          data-testid="login-button"
        >
          次へ
        </Button>
      </form>
      <div className="flex flex-row items-center justify-between w-full text-sm text-gray-500 mb-6">
        <span className="block w-1/2 max-w-2/5 bg-gray-300 h-px"></span>
        <span className="block w-16 text-center">または</span>
        <span className="block w-1/2 max-w-2/5 bg-gray-300 h-px"></span>
      </div>
      <Button
        type="outlined"
        handleClick={loginWithGoogle!}
        className="my-3 text-sm"
      >
        <FcGoogle size={24} className="inline-block mr-2" />
        Googleでログイン
      </Button>
      <Button
        type="outlined"
        handleClick={loginWithGithub!}
        className="my-3 text-sm"
      >
        <FaGithub size={24} className="inline-block mr-2" />
        GitHubでログイン
      </Button>
      <Button
        type="outlined"
        handleClick={loginWithTwitter!}
        className="my-3 text-sm"
      >
        <FaTwitter size={24} className="inline-block mr-2" color="#55ACEE" />
        Twitterでログイン
      </Button>
      <Button
        type="outlined"
        handleClick={() => router.push('/')}
        className="my-3 text-sm"
      >
        トップにもどる
      </Button>
    </div>
  )
}

export default Login
