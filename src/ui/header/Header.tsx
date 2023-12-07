import React from 'react'
import Logo from '@/ui/components/logo/Logo'
import Cart from '@/ui/components/cart/Cart'
import TelephoneNumber from '../components/telephoneNumber/TelephoneNumber'
import { businessConfigs } from '@/lib/businessConfigs'
// import StorefrontIcon from '@mui/icons-material/Storefront'
// import MobileMenu from '../menu/MobileMenu'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-pink-light shadow-header">
      <div className="px-6 h-[60px] flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex text-center gap-10">
          <div className="flex items-center text-center gap-4">
            <div className="mr-3 leading-none">
              <div>{businessConfigs.city}</div>
              <div>{businessConfigs.address}</div>
            </div>
            <div className="hidden md:block pl-4 border-l border-grey-dark">
              <TelephoneNumber />
            </div>
          </div>
          <Cart />
        </div>
      </div>
      {/* <MobileMenu className="md:hidden" /> */}
    </header>
  )
}

export default Header
