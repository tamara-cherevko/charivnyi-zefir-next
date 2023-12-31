import { H2 } from '@/ui'
import { SecondaryPageLayout } from '@/ui/layouts'
import YouTubePlayer from '@/ui/components/youtubePlayer/YoutubePlayer'
import { Fragment } from 'react'

const ZefirInfo = [
  {
    name: 'Що таке Зефір?',
    description: `Зефір поєднує в собі повітряність і ніжність, маючи багату 
    історію у східній Європі, і є відмінним вибором для тих, хто стежить за своєю фігурою 
    та здоров'ям. 
     Завдяки складу, що включає яблучне пюре, білки, цукор та натуральне ягідне 
     пюре, зефір відрізняється низьким вмістом калорій і стає чудовою альтернативою 
     традиційним солодощам. Його легкість та натуральність забезпечують популярність 
     серед спортсменів та тих, хто веде активний спосіб життя. Також зефір є безпечним і 
     корисним вибором для вагітних жінок, які бажають побалувати себе чимось солодким. 
     Він ідеально підходить як доповнення до чаю або кави та служить чудовим легким 
     десертом, що покращує настрій, не перевантажуючи організм`,
  },
  {
    name: 'Як ви виготовляєте зефір',
    description: `Наші кондитери виготовляють зефір, дотримуючись традиційних методів з особливою увагою до деталей - від інгредієнтів до контролю температури та вологості. Зефірна маса збивається в міксері та кропотливо відсаджується кондитерами на пергамент. Кожна зефірка потребує уваги, вміння та швидкості від кондиера. Наш зефір містить на 50% меньше цукру в складі, в порівнянні з класичним рецептом, тому зефіна маса швидко застигає, і у кондитерів є лише 2 хвилини щоб відсадити 20 зефір. Треба не аби яка майстерність, тепер ви знаєте! Після того як красиві зефірки готови, вони відправляються сохнути на спеціальні стелажі, де дотримується відповідна температура і вологість. Лише через 24-40 годин зефір висохне і буде готовий до відправки. `,
  },
  {
    name: 'Чим ваш зефір відрізняється від інших',
    description: `Ми дуже часто чуємо від клієнтів: 'Я не люблю зефір.' Наша відповідь завжди одна: 'Це тому, що ви ще не куштували наш зефір'. Наш зефір відрізняється від інших: у ньому цукру вдвічі менше, ніж у класичному рецепті інших кондитерів, і в 8 разів менше, ніж у стандартному заводському магазинному зефірі. Ми не використовуємо штучні барвники чи ароматизатори, а смак та колір нашому зефіру додають лише натуральні фрукти. Відчуйте різницю із нашим Чарівним Зефіром, який не лише смачний, а й корисніший.`,
  },
  {
    name: 'Скільки калорій в домашньому зефирі?',
    description: `В одій зефірці приблизно 65Ккал, одна зефірка має вагу приблизно 40гр. В 100г зефіру - 162Ккал.`,
  },
  {
    name: 'Як зберігати зефір',
    description: `Зефір слід зберігати в сухому, прохолодному місці, подалі від прямих сонячних променів. Найкраще підходить щільно закрита ємність, щоб уникнути втрати свіжості та підтримати його ніжну текстуру. Рекомендуємо вжити зефір протягом трьох тижнів з моменту покупки для найкращого смакового досвіду.`,
  },
  {
    name: 'Чи можна замовити Чарівний Зефір онлайн?',
    description: `Так, ми з радістю пропонуємо нашим клієнтам можливість замовлення Чарівного Зефіру через наш онлайн-магазин, із доставкою по всій Україні. Наш зефір відмінно зберігає якість під час транспортування, тому ми гарантуємо, що ваше замовлення буде доставлене свіже та вчасно. Ми вживаємо всіх необхідних заходів для надійної упаковки, щоб забезпечити збереження смаку та свіжості продукції, незалежно від відстані доставки.`,
  },
]
export default function Products() {
  return (
    <SecondaryPageLayout title="Про зефір" image={'/images/about-zefir.jpg'}>
      <div className="w-[70%] mx-auto">
        <div className="mb-8 text-center">
          <p>
            Ласкаво просимо на сторінку частих запитань про Чарівний Зефір, де ми розкриваємо солодкі таємниці наших
            натуральних ласощів!
          </p>
          <p>
            Створений з любов'ю та з використанням тільки найкращих інгредієнтів, наш зефір є свідченням нашої
            прихильності до якості та аромату. Ознайомтеся з найпоширенішими питаннями про зефір і дізнайтесь, чому цей
            небесний кондитерська виріб завоював серця по наших клієнтів.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6 gap-y-10 ">
          {ZefirInfo.map(({ name, description }, i) => (
            <Fragment key={i}>
              <div>
                <p className="bg-white bg-opacity-50 rounded float-right text-center font-bold text-purple p-2 w-full text-lg">
                  {name}
                </p>
              </div>
              <div className="col-span-3">{description}</div>
              {i !== ZefirInfo.length - 1 ? <hr className="col-span-4" /> : ''}
            </Fragment>
          ))}
        </div>
        <div className="my-10">
          <H2>/ Як створюється зефір</H2>
        </div>
        <div className="my-10">
          <YouTubePlayer videoId="9Fuc_zGIaCI" />
        </div>
      </div>
    </SecondaryPageLayout>
  )
}
