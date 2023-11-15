import { businessConfigs } from '@/lib/businessConfigs'
import TelephoneNumber from '@/ui/telephoneNumber/TelephoneNumber'
import shippingImage from '@/public/images/shipping.jpg'
import { SecondaryPageLayout } from '@/ui/layouts'

const shippingInfo = [
  {
    name: '🚚 Курʼєр',
    description: (
      <>
        <p>Ми б залюбки доставили чарівний зефір до Вашого дому, але наразі нажаль наш курʼєр не працює.</p>
        <p>Ми можемо викликати для Вас таксі, та відправити смаколики на любу адресу в м.Київ.</p>
        <p>Вартість послуг таксі оплачується окремо за тарифами служби таксі</p>
      </>
    ),
  },
  {
    name: '🇺🇦 Доставка по України',
    description: (
      <>
        <p>
          Доставка по всій України здійснюється транспортними компаніями Нова Пошта або Укрпошта за тарифами
          відповідного оператора.
        </p>
        <p>
          <strong> При умові замовленні від 1500грн ви не сплачуєте вартість доставки.</strong>
        </p>
        <p>Ми гарануємо безпечне та безкоштовне пакування.</p>
      </>
    ),
  },
  {
    name: '🏠 Забрати самостійно',
    description: (
      <>
        <p>Також зефір можна забрати самостійно за адресою:</p>
        <p>{`${businessConfigs.city} ${businessConfigs.address}`}</p>
        <p>{`${businessConfigs.address2}`}</p>
        <p>{`Ми працюємо щодня з ${businessConfigs.workingHoursStart} до ${businessConfigs.workingHoursEnd}. Без вихідних`}</p>
        <TelephoneNumber />
      </>
    ),
  },
]

export default function Shipping() {
  return (
    <SecondaryPageLayout title="Умови доставки" image={shippingImage}>
      <div className="grid grid-cols-4 gap-6 gap-y-10 w-[70%] mx-auto">
        {shippingInfo.map(({ name, description }, i) => (
          <>
            <div>
              <p className="bg-white bg-opacity-50 rounded float-right text-center font-bold text-purple p-2 w-full text-lg">
                {name}
              </p>
            </div>
            <div className="col-span-3">{description}</div>
            {i !== shippingInfo.length - 1 ? <hr className="col-span-4" /> : ''}
          </>
        ))}
      </div>
    </SecondaryPageLayout>
  )
}
