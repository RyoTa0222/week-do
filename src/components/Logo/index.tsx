import { LogoType } from '@/types'
import Image from 'next/image'
import { useMemo } from 'react'

interface Props {
  type?: LogoType
}

const Logo: React.VFC<Props> = ({ type = 'large' }) => {
  const style = useMemo(() => {
    if (type === 'large') {
      return 'text-2xl'
    } else {
      return 'text-sm'
    }
  }, [type])
  const size = useMemo(() => {
    if (type === 'large') {
      return { width: '64px', height: '48px' }
    } else {
      return { width: '40px', height: '32px' }
    }
  }, [type])
  return (
    <span className={`${style} font-melete inline-flex items-center`}>
      <Image
        src="/images/logo.svg"
        alt="week do"
        width={size.width}
        height={size.height}
        unoptimized={process.env.NODE_ENV === 'development'}
      />
      WeekDo
    </span>
  )
}

export default Logo
