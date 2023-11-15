import { H2, SetcionImage } from '@/ui'
import Head from 'next/head'
import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

interface IProps {
  title: string
  image: StaticImageData
  children: ReactNode
}
export default function SecondaryPageLayout({ children, title, image }: IProps) {
  return (
    <div>
      <Head>
        <title>Чарівний зефір - {title}</title>
      </Head>
      <main>
        <div className="bg-gray-100 p-10 mb-8">
          <H2>/ {title}</H2>
          <div className="my-12">
            <SetcionImage image={image} alt="title" />
          </div>
          <div className="my-8">{children}</div>
        </div>
      </main>
    </div>
  )
}
