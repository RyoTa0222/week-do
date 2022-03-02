import type { NextPage } from 'next'
import Button from '@/components/Button'
// import Logo from '@/components/Logo'
import { useAuthContext } from '@/contexts/AuthProvider'

const Home: NextPage = () => {
  const { logout } = useAuthContext()
  return (
    <div className="flex justify-center items-center flex-col font-mono">
      {/* <Logo />
      <Logo type="small" /> */}
      <Button type="filled" handleClick={logout!}>
        logout
      </Button>
      <Button type="filled" handleClick={() => console.log('aaa')} disabled>
        disabled
      </Button>
      <Button type="outlined" handleClick={() => console.log('aaa')}>
        action
      </Button>
      <Button type="outlined" handleClick={() => console.log('aaa')} processing>
        processing
      </Button>
    </div>
  )
}

export default Home
