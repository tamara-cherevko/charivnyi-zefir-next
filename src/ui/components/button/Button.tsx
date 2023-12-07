import { ReactNode, ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

const Button = ({
  children,
  variant = 'black',
  ...props
}: { children: ReactNode; variant?: 'black' | 'light' } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonClasses = {
    black: 'bg-black text-white transition-all duration-500 hover:bg-purple',
    light:
      'border border-black border-solid my-2 bg-white transition-all duration-500 text-black hover:bg-pink-500 hover:border-transparent',
  }
  return (
    <button className={classNames('h-10 px-8 font-din', buttonClasses[variant])} {...props}>
      {children}
    </button>
  )
}

export default Button
