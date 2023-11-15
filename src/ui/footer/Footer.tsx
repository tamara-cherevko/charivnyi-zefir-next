import React from 'react'
import cardIcon from '@/public/images/viza-mastercard-icon.png'
import Link from 'next/link'
import TelephoneNumber from '../telephoneNumber/TelephoneNumber'
import Wave from '@/ui/wave/Wave'
import Image from 'next/image'
import { footerMenu, IMenuItem } from '@/lib/utils/menuUtils'
import { businessConfigs } from '@/lib/businessConfigs'

const FooterMenuItem = ({ title, link }: IMenuItem) => {
  return (
    <Link className="font-palatino block text-[16px] leading-6 mb-2 text-gray-700 hover:text-pink" href={link}>
      {title}
    </Link>
  )
}

const Footer = () => {
  const contract = '../public/docs/consulting-agreement.pdf'

  return (
    <footer>
      <div className="overflow-x-hidden">
        <div className="relative md:pt-[8rem] md:py-0 md:pb-[2rem] md:h-[30rem]">
          <Wave />
          <div className="internat-container relative z-10">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-3 text-center md:text-left">
                <h4 className="mb-8 font-semibold">Зефірна майстерня</h4>
                <div>
                  {footerMenu.map((menuProps, i) => (
                    <FooterMenuItem {...menuProps} key={i} />
                  ))}
                  <a
                    href={contract}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-palatino block text-[16px] leading-6 mb-3 text-gray-700 hover:text-pink"
                  >
                    Публічний договір
                  </a>
                </div>
              </div>
              <div className="col-span-7">
                <h4 className="mb-8 font-semibold">Контакти</h4>
                <div className="bg-white bg-opacity-50 rounded p-5">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold">АДРЕСА Майстерні</h4>
                      <p className="text-[1.2rem]">{businessConfigs.city}</p>
                      <p className="text-[1.2rem]">{businessConfigs.address}</p>
                      <p className="mt-4">
                        <TelephoneNumber />
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Ми працюємо</h4>
                      <p className="text-[1.2rem]">{`Щодня з ${businessConfigs.workingHoursStart} до ${businessConfigs.workingHoursEnd}`}</p>
                      <p className="text-[1.2rem]">Без вихідних</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ">
                <Image src={cardIcon} alt="Visa Mastercard icon" className="w-full mt-16" />
              </div>
            </div>
            <div className="mt-4 text-purple text-lg">© {new Date().getFullYear()} Charivnyi Zefir</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
