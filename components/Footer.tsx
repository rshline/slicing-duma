import React from 'react'

function Footer() {
  return (
    <div className='bg-white px-10 pt-16 pb-10 border-t border-solid border-light-grey border-opacity-30'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
        <div className='footer-section'>
          <h2>About Us</h2>
          <a href='#' className='link-footer'>About Duma</a>
          <a href='#' className='link-footer'>Find Us</a>
          <a href='#' className='link-footer'>Careers</a>
        </div>
        <div className='footer-section'>
          <h2>Info</h2>
          <a href='#' className='link-footer'>Returns and Exchanges</a>
          <a href='#' className='link-footer'>Terms and Conditions</a>
          <a href='#' className='link-footer'>Shipping Information</a>
        </div>
        <div className='footer-section'>
          <h2>Customer Care</h2>
          <a href='#' className='link-footer'>Anteraja Tracking</a>
          <a href='#' className='link-footer'>Contact Us</a>
        </div>
        <div className='footer-section'>
          <h2>Newsletter</h2>
          <a href='#' className='link-footer'>Subscribe to receive updates, access to exclusive deals, and more.</a>
          <form className='flex flex-col space-y-4'>
            <input type='text' placeholder='Enter your email address' className='w-fulll text-sm border border-solid border-light-grey border-opacity-70 px-2 py-3' />
            <button className='btn-yellow w-fit'>SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className='py-4'>
          <p className='text-primary-beige text-[13px] text-center md:text-left'>&#169; Duma Official</p>
        </div>
    </div>
  )
}

export default Footer