import { businessConfigs } from '../businessConfigs'
import { PAGES } from './pagesUtils'

export interface IMenuItem {
  title: string
  link: string
  slug: string
}

export enum ProductsPagesSlugs {
  all = 'all',
  cakes = 'cakes',
  presents = 'presents',
}

export enum PagesSlugs {
  shop = 'shop',
  facebook = 'facebook',
  instagram = 'instagram',
  about = 'about',
  team = 'team',
  aboutZefir = 'aboutZefir',
  shipping = 'shipping',
  aboutPayment = 'aboutPayment',
}

export const mainMenu: IMenuItem[] = [
  {
    title: 'Продукція',
    slug: ProductsPagesSlugs.all,
    link: PAGES.productsAll,
  },
  {
    title: 'Торти на замовлення',
    slug: ProductsPagesSlugs.cakes,
    link: PAGES.productsCakes,
  },
  {
    title: 'Подарунки',
    slug: ProductsPagesSlugs.presents,
    link: PAGES.productsPresents,
  },
  {
    title: 'Майстерня',
    slug: PagesSlugs.shop,
    link: PAGES.shop,
  },
]

export const socialMenu: IMenuItem[] = [
  {
    title: 'FACEBOOK',
    slug: 'facebook',
    link: businessConfigs.facebook,
  },
  {
    title: 'INSTAGRAM',
    slug: 'instagram',
    link: businessConfigs.instagram,
  },
]

export const footerMenu: IMenuItem[] = [
  {
    title: 'Про нас',
    slug: 'about',
    link: PAGES.about,
  },
  {
    title: 'Наша команда',
    slug: 'team',
    link: PAGES.team,
  },
  {
    title: 'Про зефір',
    slug: 'aboutZefir',
    link: PAGES.aboutZefir,
  },
  {
    title: 'Умови доставки',
    slug: 'shipping',
    link: PAGES.shipping,
  },
  {
    title: 'Оплата',
    slug: 'aboutPayment',
    link: PAGES.aboutPayment,
  },
]
