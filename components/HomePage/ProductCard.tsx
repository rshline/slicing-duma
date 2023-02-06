import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';

function ProductCard({product}: IProduct) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  
  return (
    <div>
      <Link href={`/products/[id]`} as={`/products/${product.id}`}>
      <div className='flex flex-col space-y-2 w-48 lg:w-64 items-center px-2'>
        <div
          className="cursor-pointer transition-all duration-1000 ease-linear"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {isHovering ? (
            <Image 
              src={product.img[1]} 
              alt={product.name} 
              width="0"
              height="0"
              sizes='100%'
              className="w-48 h-auto lg:w-64 lg:h-auto object-cover"
            />
          ) : (
            <Image 
              src={product.img[0]} 
              alt={product.name} 
              width="0"
              height="0"
              sizes='100%'
              className="w-48 h-auto lg:w-64 lg:h-auto object-cover"
            />
          )}
          {(product.status != '') ? (
            <p className='absolute top-2 left-4 bg-white text-light-grey text-[10px] md:text-xs tracking-wide p-1'>
              {product.status}
            </p>
          ) : (
            <div>

            </div>
          )}
        </div>
        <h3>{product.name}</h3>
        {(product.discount!=0) ? (
          <div className='flex space-x-2'>
            <h4 className='sale-text'>Rp {product.discount.toLocaleString('en-US')}</h4>
            <h4 className='line-through'>Rp {product.price.toLocaleString('en-US')}</h4>
          </div>
        ) : (
          <div>
            <h4>Rp {product.price.toLocaleString('en-US')}</h4>
          </div>
        )}
        
        <div className='flex items-center justify-center w-4 h-4 border border-solid border-light-grey rounded-full'>
          <div className='w-[13px] h-[13px] rounded-full' style={{ "backgroundColor": product.hexColor } as React.CSSProperties}></div>
        </div>
      </div> 
      </Link>     
    </div>

  )
}

export default ProductCard