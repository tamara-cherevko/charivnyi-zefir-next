import Image, { StaticImageData } from 'next/image'

interface IProps {
  image: StaticImageData
  alt: string
}

const SetcionImage = ({ image, alt }: IProps) => {
  return (
    <div className="flex justify-center  w-64 h-64 mx-auto rounded-full overflow-hidden">
      <Image src={image} alt={alt} className="max-w-none" />
    </div>
  )
}
export default SetcionImage
