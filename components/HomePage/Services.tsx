import Image from 'next/image'
import React from 'react'
import { asset, services } from '../../DummyData'

function Services() {
  return (
    <div className='w-full lg:py-10'>
      <div className='overflow-hidden lg:h-[513px]'>
        <Image 
          src={asset.bannerTwo} alt='store' 
          width="0"
          height="0"
          sizes="100vw"
          className="w-screen h-auto object-cover"
        />
      </div>

      <div className='pt-8 w-full'>
        <h1>Our services</h1>
        <div className='flex pt-10 justify-around space-x-5 text-xs lg:text-sm text-dark-grey overflow-x-scroll md:overflow-x-hidden'>
          {services.map((service, i) => (
            <div className='flex flex-col lg:flex-row space-x-0 space-y-2 lg:space-x-1 lg:space-y-0 items-center justify-center text-center' key={i}>
              <Image
                src={service.icon} alt='service'
                height={50}
                width={50}
                className='object-contain'
              />
              <p className='w-36'>{service.desc}</p>
            </div>            
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services