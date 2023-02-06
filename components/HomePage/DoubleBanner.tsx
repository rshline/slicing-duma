import Image from 'next/image'
import React from 'react'
import { asset } from '../../DummyData'

function DoubleBanner() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      {asset.doubleBanner.map((img, i) => (
        <div className='overflow-hidden' key={i}>
          <Image
            src={img}
            alt='banner 1'
            height='0'
            width='0'
            sizes='100vw'
            className='w-full cursor-pointer h-auto object-cover scale-100 hover:scale-110 transition-all duration-1000'
          />              
        </div>
    
      ))}
    </div>
  )
}

export default DoubleBanner