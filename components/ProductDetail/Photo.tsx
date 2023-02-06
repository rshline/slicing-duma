import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

function Photo(props:{img: string[]}) {
  const settings = {
    dots: true,
    arrows:false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    appendDots: (dots: any) => (
      <div>
        <ul className='m-0'> {dots} </ul>
      </div>
    ),
    dotsClass: 'vertical-dots',
    customPaging: (i:number) => (
      <div>
        <Image 
            src={props.img[i]} alt='thumbnail'   
            width="0"
            height="0"
            sizes="100%"
            className="thumbnail"
        />            
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dotsClass: 'slick-dots',
          appendDots: (dots: any) => (
            <div>
              <ul className='m-0'> {dots} </ul>
            </div>
          ),
          customPaging: (i: any) => <button>{i}</button>
        }
      },      
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dotsClass: 'slick-dots',
          vertical: false,
          verticalSwiping: false,
          swipe: true,
          appendDots: (dots: any) => (
            <div>
              <ul className='m-0'> {dots} </ul>
            </div>
          ),
          customPaging: (i: any) => <button className=''></button>
        }
      },
    ]
  };
  
  return (
    <div className='mb-10 overflow-x-hidden overflow-y-scroll'>
      <div className='relative w-full'>
        <Slider {...settings}>
            {props.img.map((img, i) => (
              <div key={i} className='relative lg:ml-32'>
                <Image 
                    src={img} alt='photo'   
                    width="0"
                    height="0"
                    sizes="100%"
                    className="w-full h-[563px] lg:w-[449px] lg:h-[674px] object-cover"
                />                  
              </div>
            ))}            
        </Slider>        
      </div>

    </div>
  )
}

export default Photo