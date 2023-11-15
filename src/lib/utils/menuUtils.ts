import { businessConfigs } from '../businessConfigs'
import { PAGES } from './pagesUtils'

export interface IMenuItem {
  title: string
  link: string
}

export const mainMenu: IMenuItem[] = [
  {
    title: 'Продукція',
    link: PAGES.productsAll,
  },
  {
    title: 'Торти на замовлення',
    link: PAGES.productsCakes,
  },
  {
    title: 'Подарунки',
    link: PAGES.productsPresents,
  },
  {
    title: 'Майстерня',
    link: PAGES.shop,
  },
]

export const socialMenu: IMenuItem[] = [
  {
    title: 'FACEBOOK',
    link: businessConfigs.facebook,
  },
  {
    title: 'INSTAGRAM',
    link: businessConfigs.instagram,
  },
]

export const footerMenu: IMenuItem[] = [
  {
    title: 'Про нас',
    link: PAGES.about,
  },
  {
    title: 'Наша команда',
    link: PAGES.team,
  },
  {
    title: 'Про зефір',
    link: PAGES.aboutZefir,
  },
  {
    title: 'Умови доставки',
    link: PAGES.shipping,
  },
  {
    title: 'Оплата',
    link: PAGES.aboutPayment,
  },
]
