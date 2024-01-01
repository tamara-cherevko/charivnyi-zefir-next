import Image from 'next/image'

interface IProps {
  image: string
  alt: string
}

const SetcionImage = ({ image, alt }: IProps) => {
  return (
    <div className="relative flex justify-center  w-64 h-64 mx-auto rounded-full overflow-hidden">
      <Image src={image} alt={alt} className="max-w-none" layout="fill" objectFit="cover" />
    </div>
  )
}
export default SetcionImage
