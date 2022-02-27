import HeadComponent from '@/components/Head'
import Button from '@/components/Button'
import Router from 'next/router'
import type { NextPage } from 'next'

interface Props {
  statusCode: number
  message: string
}

const Error: NextPage<Props> = ({ statusCode, message }) => {
  return (
    <>
      <HeadComponent title={String(statusCode)} />
      <h1 className="font-bananaslip text-center text-2xl">{statusCode}</h1>
      <p className="text-center mt-12">{message}</p>
      <Button
        handleClick={() => Router.push('/')}
        className="m-auto mt-20 d-block"
      >
        トップページにもどる
      </Button>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode
    ? res.statusCode
    : err?.statusCode
    ? err.statusCode
    : 404
  const message = err?.message ?? `An error ${statusCode} occurred on server`
  return { statusCode, message }
}

export default Error
