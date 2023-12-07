import Image from 'next/image'
import classNames from 'classnames'
import React from 'react'

interface Iprops {
  alt: string
  width?: number
  height?: number
  className?: string
}

const ProductDefaultImage = ({ alt, className, width, height }: Iprops) => {
  const imageClass = classNames('opacity-70', className)

  return <Image src={`/images/products/default.jpeg`} alt={alt} width={width} height={height} className={imageClass} />
}

export default ProductDefaultImage
