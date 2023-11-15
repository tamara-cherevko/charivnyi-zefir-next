import React from 'react'
import logo from '@/public/images/name.png'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => (
  <div className="flex items-center justify-start p-1">
    <Link href="/" className="w-[180px] h-[30px] md:h-[36px]">
      <Image src={logo} alt="Чарівний зефір лого" className="h-full w-auto" />
    </Link>
  </div>
)

export default Logo
