import HeadComponent from '@/components/Head'
import Button from '@/components/Button'
import Router from 'next/router'

const Error = () => {
  return (
    <>
      <HeadComponent title="404" />
      <h1 className="font-bananaslip text-center text-2xl">404</h1>
      <p className="text-center mt-12">ページが見つかりません</p>
      <Button
        handleClick={() => Router.push('/')}
        className="m-auto mt-20 d-block"
      >
        トップページにもどる
      </Button>
    </>
  )
}

export default Error
