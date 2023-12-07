import { businessConfigs } from '@/lib/businessConfigs'
import { SecondaryPageLayout } from '@/ui/layouts'
import { Fragment } from 'react'

const PaymentInfo = [
  {
    name: '💵 Готівка',
    description: (
      <>
        <p>Оплата готівкою можлива при самовивозі товару з нашого магазину або точки продажу.</p>
      </>
    ),
  },
  {
    name: '💳 Карта Приват Банку',
    description: (
      <>
        <p>{businessConfigs.cardNumber}</p>
        <p>{businessConfigs.cardHolder}</p>
        <p>Призначення платежу: {businessConfigs.paymentDescription}</p>
      </>
    ),
  },
  {
    name: '🏦 Розрахунковий рахунок',
    description: (
      <>
        <p>{businessConfigs.accountHolder}</p>
        <p>Код отримувача: {businessConfigs.mfo}</p>
        <p>Рахунок отримувача: {businessConfigs.inn}</p>
        <p>Назва банку: {businessConfigs.bankName}</p>
        <p>Код Банку (МФО): {businessConfigs.bankMfo}</p>
        <p>Призначення платежу: {businessConfigs.paymentDescription}</p>
      </>
    ),
  },
  {
    name: '📦 Післяплата',
    description: (
      <>
        <p>Ви можете оплатити замовлення після його отримання на пошті.</p>
        <p>Цей спосіб оплати передбачає додаткову комісію за пересилання грошей, яку встановлює поштова служба.</p>
      </>
    ),
  },
]

export default function AboutPayment() {
  return (
    <SecondaryPageLayout title="Оплата" image={'/images/shipping.jpg'}>
      <div className="grid grid-cols-4 gap-6 gap-y-10 w-[70%] mx-auto">
        {PaymentInfo.map(({ name, description }, i) => (
          <Fragment key={i}>
            <div>
              <p className="bg-white bg-opacity-50 rounded float-right text-center font-bold text-purple p-2 w-full text-lg">
                {name}
              </p>
            </div>
            <div className="col-span-3">{description}</div>
            {i !== PaymentInfo.length - 1 ? <hr className="col-span-4" /> : ''}
          </Fragment>
        ))}
      </div>
    </SecondaryPageLayout>
  )
}
