import type { Metadata } from 'next'

import '@/ui/globals.css'
import Header from '@/ui/header/Header'
import Menu from '@/ui/components/menu/Menu'
import { ReduxProvider } from '@/redux/provider'
import Footer from '@/ui/footer/Footer'
import { ToastContainer } from 'react-toastify'

export const metadata: Metadata = {
  title: 'Чарівний зефір - healthy sweets, натуральні солодощі та морозиво',
  description:
    'Чарівний зефір - це натуральн солодощі та морозиво, виготовлені без барвників, ароматизаторів та синтетичних підсолоджувачів',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className="text-base text-grey-text">
          <div className="h-screen min-h-screen">
            <Header />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              className="mt-14 rounded-sm"
              icon={false}
              theme="colored"
            />
            <div className="flex flex-col justify-between h-[calc(100%-60px)]">
              <div className="internat-container">
                <Menu />
                <main>{children}</main>
              </div>
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </ReduxProvider>
  )
}
