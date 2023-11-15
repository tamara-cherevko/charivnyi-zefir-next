import Link from 'next/link'
import React from 'react'
import { mainMenu, socialMenu } from '@/lib/utils/menuUtils'

const MenuComponent = ({ menu }: { menu: typeof mainMenu }) => (
  <nav className="flex items-center w-auto justify-between gap-10">
    {menu.map(({ title, link }, i) => (
      <Link
        scroll
        href={link}
        key={`main_menu_desktop_${i}`}
        className="block cursor-pointer font-din font-normal uppercase  py-8 transition-colors duration-300 hover:text-pink focus:text-pink active:text-pink"
      >
        {title}
      </Link>
    ))}
  </nav>
)

const Menu = () => (
  <div className="desktop-only">
    <div className="flex justify-between">
      <MenuComponent menu={mainMenu} />
      <MenuComponent menu={socialMenu} />
    </div>
  </div>
)

export default Menu
