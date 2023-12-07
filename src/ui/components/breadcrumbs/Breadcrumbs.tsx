'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Breadcrumbs = () => {
  const paths = usePathname()
  const pathNames = paths?.split('/').filter((path) => path)

  console.log(pathNames)

  return null
}

export default Breadcrumbs
