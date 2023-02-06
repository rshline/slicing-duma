import Image from 'next/image';
import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { GrNext, GrPrevious } from 'react-icons/gr';
import Slider from 'react-slick';
import { igPosts, responsive } from "../../DummyData";
import { BsArrowDown } from "react-icons/bs";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className='absolute top-1/2 -right-3 md:-right-5 transform -translate-y-1/2 w-5 h-5 md:w-9 md:h-9  bg-white cursor-pointer shadow-md'
      onClick={onClick}
    >
      <GrNext className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-base'  />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const {onClick } = props;
  return (
    <div
      className='absolute top-1/2 -left-3 md:-left-5 transform -translate-y-1/2 w-5 h-5 md:w-9 md:h-9 z-10 bg-white cursor-pointer shadow-md'
      onClick={onClick}
    >
      <GrPrevious className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-base'  />
    </div>
  );
}

function InstagramPost() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className='flex flex-col space-y-11 py-12 px-6 md:py-20 md:px-12'>
      <div className='flex justify-center items-center space-x-2'>
        <h1>Follow us on Instagram</h1>   
        <BsArrowDown className='text-primary-beige' />
      </div>
      
      <div>
        <Slider {...settings}>
          {igPosts.map((post, i) => {
            return (
              <div className="w-20 h-20 md:w-72 md:h-72 object-cover -z-10" key={i}>
                <Image 
                  src={post} 
                  alt='instagram'
                  width="0"
                  height="0"
                  sizes='100%'
                  className="w-20 h-20 md:w-72 md:h-72 object-cover"
                />                
              </div>

            )
          })}
        </Slider>
      </div>

      
    </div>
  )
}

export default InstagramPost