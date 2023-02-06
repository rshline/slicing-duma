import React from 'react'
import { categories } from '../../DummyData'
import Image from 'next/image'
import { useState } from 'react'

function CategoryBanner() {
  const [active, setActive] = useState(2)

  return (
    <div className='grid grid-cols-2 lg:grid-cols-5 lg:h-[500px] my-4 lg:my-6'>
      {categories.map((category, i) => (
        <div className={`cursor-pointer transition-all duration-300 ${i==active ? 'lg:col-span-2' : 'lg:col-span-1'}`} key={i}  onMouseOver={() => setActive(i)}>
          <Image
            src={category.img}
            alt='category banner'
            width='0'
            height='0'
            sizes='100vh'
            className='h-full w-auto object-cover'
          />
          <div className='relative'>
            <div className='absolute bottom-6 lg:bottom-14 left-1/2 transform -translate-x-1/2'>
              <a href='#' className='btn-orange'>{category.name}</a>        
            </div>            
          </div>

        </div>
      ))}
    </div>
  )
}

export default CategoryBanner