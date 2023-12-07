import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => (
  <div className="flex items-center justify-start p-1">
    <Link href="/" className="w-[180px] h-[30px] md:h-[36px]">
      <Image src={'/images/name.png'} width={180} height={30} alt="Чарівний зефір лого" className="h-full w-auto" />
    </Link>
  </div>
)

export default Logo
