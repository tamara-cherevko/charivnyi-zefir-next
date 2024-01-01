import React from 'react'
import Link from 'next/link'
import TelephoneNumber from '../components/telephoneNumber/TelephoneNumber'
import Wave from '@/ui/components/wave/Wave'
import Image from 'next/image'
import { footerMenu, IMenuItem } from '@/lib/utils/menuUtils'
import { businessConfigs } from '@/lib/businessConfigs'
import H4 from '../text/H4'

const FooterMenuItem = ({ title, link }: IMenuItem) => {
  return (
    <Link className="font-fixel block text-[16px] mb-2  text-gray-700 hover:text-pink" href={`/${link}`}>
      {title}
    </Link>
  )
}

const Footer = () => {
  const contract = '/docs/consulting-agreement.pdf'

  return (
    <footer>
      <div className="overflow-x-hidden">
        <div className="relative md:pt-[8rem] md:py-0 md:pb-[2rem] md:h-[30rem]">
          <Wave />
          <div className="internat-container relative z-10">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-3 text-center md:text-left">
                <H4>Зефірна майстерня</H4>
                <div>
                  {footerMenu.map((menuProps, i) => (
                    <FooterMenuItem {...menuProps} key={i} />
                  ))}
                  <a
                    href={contract}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-fixel block text-[16px] leading-6 mb-3 text-gray-700 hover:text-pink"
                  >
                    Публічний договір
                  </a>
                </div>
              </div>
              <div className="col-span-7">
                <H4>Контакти</H4>
                <div className="bg-white bg-opacity-50 rounded p-5">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                      <h5 className="font-selection mb-4">АДРЕСА Майстерні</h5>
                      <p>{businessConfigs.city}</p>
                      <p>{businessConfigs.address}</p>
                      <p className="mt-4">
                        <TelephoneNumber />
                      </p>
                    </div>
                    <div>
                      <h5 className="font-selection mb-4">Ми працюємо</h5>
                      <p>{`Щодня з ${businessConfigs.workingHoursStart} до ${businessConfigs.workingHoursEnd}`}</p>
                      <p>Без вихідних</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ">
                <Image
                  src={'/images/viza-mastercard-icon.png'}
                  width={100}
                  height={100}
                  alt="Visa Mastercard icon"
                  className="w-full mt-16"
                />
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
