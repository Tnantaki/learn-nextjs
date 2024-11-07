import Image from 'next/image'
import React from 'react'
import alya from '@/public/images/alya.jpg'

const ImagePage = () => {
  return (
    <div>
      <Image src={alya} alt='alya' />
    </div>
  )
}

export default ImagePage