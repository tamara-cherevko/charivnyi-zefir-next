import { SecondaryPageLayout } from '@/ui/layouts'
import shippingImage from '@/public/images/shipping.jpg'
import Head from 'next/head'

export default function Products() {
  return (
    <SecondaryPageLayout title="Наша команда" image={shippingImage}>
      Наша команда
    </SecondaryPageLayout>
  )
}
