'use client'
import ImageGallery from 'react-image-gallery'
import classNames from 'classnames'
import React from 'react'
import { IProductImage } from '@/interfaces/product/interface'

interface Iprops {
  images: IProductImage[]
  className?: string
}

const ProductGallery = ({ images, className }: Iprops) => {
  if (!images?.length) return null

  const imageClass = classNames('opacity-70', className)
  const galleryImages = images.map(({ image }) => ({
    original: `/images/products/${image}`,
    thumbnail: `/images/products/${image}`,
  }))

  return <ImageGallery items={galleryImages} showNav={false} showPlayButton={false} />
}

export default ProductGallery
