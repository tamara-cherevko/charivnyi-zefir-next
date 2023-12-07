import { ReactNode } from 'react'
import classNames from 'classnames'

interface H2Props {
  children: ReactNode
  className?: string
}

export default function H2({ children, className }: H2Props) {
  const h2Class = classNames('text-center text-4xl my-8 font-amatic uppercase tracking-wider font-thin', className)

  return <h2 className={h2Class}>{children}</h2>
}
