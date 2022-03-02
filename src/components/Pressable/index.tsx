import React from 'react'

interface Props {
  handleClick: (args: unknown) => unknown
  className?: string
}

const Pressable: React.FC<Props> = ({ children, className, handleClick }) => {
  return (
    <span
      onClick={handleClick}
      role="presentation"
      className={`${className} cursor-pointer`}
    >
      {children}
    </span>
  )
}

export default Pressable
