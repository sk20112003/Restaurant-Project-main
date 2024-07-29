import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
const Navbar = () => {

  const[nav,setnav]=useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
        <div onClick={()=>setnav(!nav)} className='cursor-pointer'>
        <AiOutlineMenu size={30}/>
      </div>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
        SANDY <span className='font-bold'>Eats</span>
      </h1>
      <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
        <p className='bg-black text-white rounded-full p-2'> Delivery</p>
        <p className='p-2'>Pick Up</p>
      </div>
        </div>
       
       <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25}/>
        <input className='bg-transparent p-2 focus:outline-none' type='text' placeholder='search foods'/>
       </div>
        <button className='bg-black text-white hidden md:flex items-center py-3 px-5 rounded-xl'>
          <BsFillCartFill size={20} className='mr-2'/>Cart
        </button>

        {nav?<diV className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0">  </diV>:""}

        
        <div className={nav ?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':"fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
          <AiOutlineClose onClick={()=>setnav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
          <h2 className='text-2xl p-4 '> SANDY<span className='font-bold'>Eats</span></h2>
          <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
              <li className='text-xl py-4 flex'> 
                Orders</li>
                <li className='text-xl py-4 flex'> 
                Favorites</li>
                <li className='text-xl py-4 flex'> 
                Wallet</li>
                <li className='text-xl py-4 flex'> 
                Help</li>
                <li className='text-xl py-4 flex'> 
                Promotion</li>
                <li className='text-xl py-4 flex'> 
                Best Once</li>
                 <li className='text-xl py-4 flex'> 
                Invite Friends</li>
            </ul>
          </nav>
        </div>
    </div>

    
          
    
    
  )
}

export default Navbar
