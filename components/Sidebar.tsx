import React from 'react'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { CgFacebook } from 'react-icons/cg'
import { IoCloseOutline, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5'

function Sidebar() {
    
  const [drawerHidden, setDrawerHidden] = useState<boolean>(true)
  const setDrawer = () => {
    setDrawerHidden(!drawerHidden)
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }
  
  return (
    <div className={`fixed overlay top-0 left-0 h-screen w-80 md:w-96 flex flex-col justify-between bg-white z-50 ${drawerHidden ? 'hidden' : 'block'}`}>
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
            <a className=''>SALE</a>
        </div>
        <div className='menu'>
            <a className=''>Wishlist</a>
        </div>
        </div>
        <div className='flex justify-around py-4 text-2xl text-primary-gold border-t border-solid border-primary-gold'> 
        <CgFacebook className='cursor-pointer' />
        <IoLogoInstagram  className='cursor-pointer' />
        <IoLogoYoutube  className='cursor-pointer' />
        </div>
    </div>  
  )
}

export default Sidebar