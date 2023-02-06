import React from 'react'
import { GrPrevious } from 'react-icons/gr';

function OrangePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className='hidden md:block absolute top-1/2 -left-11 transform -translate-y-1/2 h-11 w-11 z-20 bg-dark-orange text-primary-yellow text-lg rounded-full cursor-pointer'
      onClick={onClick}
    >
      <GrPrevious className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
    </div>
  );
}
export default OrangePrevArrow