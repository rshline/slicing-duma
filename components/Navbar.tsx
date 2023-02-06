import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { asset } from '../DummyData'
import { IoCloseOutline, IoLogoInstagram, IoLogoYoutube, IoMenuOutline, IoSearchSharp } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineShopping } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { useEffect } from 'react';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

function Navbar({isHome}: IStatus) {

  const [drawerHidden, setDrawerHidden] = useState<boolean>(true)
  const setDrawer = () => {
    setDrawerHidden(!drawerHidden)
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }

  const [background, setBackground] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 45) { 
      setBackground(true)
    } else {
      setBackground(false)
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  })

  return (
    <div>
      {/* Main Navbar */}
      <div className={`fixed flex p-4 w-full bg-white justify-between items-center z-50 ${(!background && isHome) ? 'top-9 bg-opacity-0' : 'top-0 bg-opacity-100'}`}>
        {/* brand logo */}
        <div onClick={setDrawer} className="xl:hidden"> 
          <IoMenuOutline className='text-white text-2xl cursor-pointer' />
        </div>

        <div className='flex justify-center'>
          <Link href={`/`}>
            <Image src={asset.logoImg} alt='logo' width={120} height={24} />
          </Link>
        </div>

        {/* menu */}
        <div className='hidden xl:block'>
          <div className={`flex space-x-5`}>
            <div className='desktop-menu'>
              <a className=''>New In</a>
            </div>
            <div className='desktop-menu'>
              <a className=''>Category</a>              
            </div>
            <div className='desktop-menu'>
              <a className=''>Most Wanted</a>
            </div>
            <div className='desktop-menu'>
              <a className=''>Gifting</a>
            </div>
            <div className='desktop-menu'>
              <a className=''>Shop All</a>
            </div>
            <div className='desktop-menu'>
              <a className='sale-text'>SALE</a>
            </div>
          </div> 
        </div>


        {/* search and cart */}
        <div className='flex space-x-2'>
          <IoSearchSharp className='text-lg lg:text-2xl text-primary-beige' />
          <AiOutlineShopping  className='text-lg lg:text-2xl text-primary-beige' />
        </div>
      </div>  

      {/* Sidebar */}
      <div className='fixed z-50 flex'>
        <div className={`fixed top-0 left-0 h-screen w-80 md:w-96 flex flex-col justify-between bg-white  ${drawerHidden ? 'hidden' : 'block'}`}>
          <div className='px-8 py-7'>
            <IoCloseOutline onClick={setDrawer} className='text-3xl text-primary-gold' />  
          </div>
          <div className='px-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-ligt-grey'>
            <div className='menu'>
                <a className=''>New In</a>
            </div>
            <div className='menu'>
                <div className='flex justify-between'>
                <a className=''>Category</a>  
                <AiOutlinePlus className='text-2xl text-primary-gold' />
                </div>
                
            </div>
            <div className='menu'>
                <a className=''>Most Wanted</a>
            </div>
            <div className='menu'>
                <a className=''>Gifting</a>
            </div>
            <div className='menu'>
                <a className=''>Shop All</a>
            </div>
            <div className='menu'>
                <a className='sale-text'>SALE</a>
            </div>
            <div className='menu'>
              <div className='flex space-x-2 items-center'>
                <FaHeart />
                <a className=''>Wishlist</a>
              </div>    
            </div>
          </div>
          <div className='flex justify-around py-4 text-2xl text-primary-gold border-t border-solid border-primary-gold'> 
            <CgFacebook className='cursor-pointer' />
            <IoLogoInstagram  className='cursor-pointer' />
            <IoLogoYoutube  className='cursor-pointer' />
          </div>
        </div>    
        <div className='w-full h-screen bg-dark-grey'></div>      
      </div>
     
    </div>

  )
}

export default Navbar