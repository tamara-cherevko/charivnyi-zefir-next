import { ReactNode } from 'react'
import classNames from 'classnames'

interface IProps {
  children: ReactNode
  className?: string
}

export default function H3({ children, className }: IProps) {
  return (
    <h2 className={classNames('text-center text-xl uppercase mb-4 font-selection text-burgundy-900', className)}>
      {children}
    </h2>
  )
}
