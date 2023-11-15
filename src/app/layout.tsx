import type { Metadata } from 'next'

import '@/ui/globals.css'
import Head from 'next/head'
import Header from '@/ui/header/Header'
import Menu from '@/ui/menu/Menu'
import { ReduxProvider } from '@/redux/provider'
import Footer from '@/ui/footer/Footer'

export const metadata: Metadata = {
  title: 'Чарівний зефір - healthy sweets, натуральні солодощі та морозиво',
  description:
    'Чарівний зефір - це натуральн солодощі та морозиво, виготовлені без барвників, ароматизаторів та синтетичних підсолоджувачів',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Чарівний зефір - healthy sweets, натуральні солодощі та морозиво</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="text-base">
        <ReduxProvider>
          <div className="h-screen min-h-screen">
            <Header />
            <div className="flex flex-col justify-between h-[calc(100%-60px)]">
              <div className="internat-container">
                <Menu />
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
