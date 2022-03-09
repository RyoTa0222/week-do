import React from 'react'
import { ButtonType } from '@/types'
import { useMemo } from 'react'

interface Props {
  type?: ButtonType
  handleClick: (args: unknown) => unknown
  disabled?: boolean
  processing?: boolean
  className?: string
  'data-testid'?: string
}

const Button: React.FC<Props> = ({
  children,
  handleClick,
  type = 'filled',
  disabled = false,
  processing = false,
  className = '',
  ...args
}) => {
  const baseStyle = useMemo(() => {
    switch (type) {
      case 'filled':
      default:
        return 'bg-dark text-white'
      case 'outlined':
        return 'bg-transparent text-dark border-dark border-2'
    }
  }, [type])
  const cursorStyle = useMemo(() => {
    return disabled ? 'cursor-not-allowed opacity-40' : ''
  }, [disabled])
  const processingStyle = useMemo(() => {
    return processing ? 'cursor-not-allowed opacity-40' : ''
  }, [processing])
  return (
    <button
      className={`${className} ${baseStyle} ${cursorStyle} ${processingStyle} max-w-xl w-full rounded-full py-2.5 sm:text-sm flex justify-center items-center`}
      onClick={handleClick}
      disabled={disabled}
      data-testid={args['data-testid'] ?? ''}
    >
      {children}
    </button>
  )
}

export default Button
