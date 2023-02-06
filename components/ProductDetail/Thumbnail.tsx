import Image from 'next/image'
import React from 'react'

function Thumbnail({images}: IPhotos) {
  return (
    <div className='flex flex-col'>
      {images.map((img, i) => (
        <Image 
            src={img} alt='thumbnail'   
            width="0"
            height="0"
            sizes="100vw"
            className="w-10 h-auto object-cover"
            key={i}
        />          
      ))}

    </div>
  )
}

export default Thumbnail