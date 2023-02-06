import Image from 'next/image'
import React from 'react'
import { asset } from '../../DummyData'

function MainBanner() {
  return (
    <div>
        <Image 
            src={asset.mainBanner} alt='banner'   
            width="0"
            height="0"
            sizes="100%"
            className="w-screen h-[513px] xl:h-[550px] object-cover"
            priority
        />
        <div className='absolute bottom-32 lg:bottom-28 xl:bottom-8 left-1/2 transform -translate-x-1/2'>
            <a href='#' className='btn-orange'>DISCOVER NOW</a>
        </div>
        
    </div>
  )
}

export default MainBanner