import Image from 'next/image'
import React from 'react'
import { asset } from '../DummyData'
import { FaHeart } from "react-icons/fa";

function FloatingIcon() {
  return (
    <div className='z-50'>
        <div className='hidden lg:block fixed m-0 -right-7 top-1/2 transform -translate-y-0'>
            <div className='flex space-x-2 rotate-90 text-sm'>
                <FaHeart />
                <a> My Wishlist </a>
            </div>  
        </div>
        <div className='fixed bottom-3 right-3'>
            <Image src={asset.whatsapp} alt='logo whatsapp' height={50} width={50} />    
        </div>
        
    </div>
  )
}

export default FloatingIcon