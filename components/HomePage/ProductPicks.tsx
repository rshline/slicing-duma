import React from 'react'
import { useRef } from 'react';
import { products, responsive } from '../../DummyData'
import ProductCard from './ProductCard'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import AliceCarousel from 'react-alice-carousel';
import Slider from "react-slick";
import OrangeNextArrow from '../OrangeNextArrow';
import OrangePrevArrow from '../OrangePrevArrow';

function ProductPicks() {
  const settings = {
    dots: false,
    infinite: false,
    swipeToSlide: true,
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
    <div className='flex flex-col w-full space-y-10 justify-center items-center py-20'>
      <h1>Our Picks</h1>
      <div className='w-full px-20'>
        <Slider {...settings}>
          {products.map((product, i) => {
            return (
              <ProductCard product={product} key={i} />
            )
          })}
        </Slider>
      </div>

      <a href='#' className='btn-yellow w-fit'>VIEW ALL PRODUCTS</a>
    </div>
  )
}

export default ProductPicks