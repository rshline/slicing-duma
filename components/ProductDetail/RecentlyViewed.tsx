import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import Slider from 'react-slick';
import { products, responsive } from '../../DummyData'
import ProductCard from '../HomePage/ProductCard'
import OrangeNextArrow from '../OrangeNextArrow';
import OrangePrevArrow from '../OrangePrevArrow';

function RecentlyViewed() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <OrangeNextArrow />,
    prevArrow: <OrangePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 614,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='flex flex-col w-full space-y-10 justify-center items-center py-10 md:py-20 border-b border-solid border-b-light-grey/50'>
      <h1>Recently Viewed</h1>
      <div className='w-full px-20'>
        <Slider {...settings}>
          {products.map((product, i) => {
            return (
              <ProductCard product={product} key={i} />
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default RecentlyViewed