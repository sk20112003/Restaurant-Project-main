import React from 'react'

const HeadlineCard = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg/black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Suns's Out,BOGO'S Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 px-2 rounded-xl' >Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      </div>

      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg/black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Noodle'S</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 px-2 rounded-xl' >Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      </div>

      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg/black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Fruit Salad</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 px-2 rounded-xl' >Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      </div>

      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg/black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Cake</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 px-2 rounded-xl' >Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      </div>

      
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg/black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Fish Fry</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 px-2 rounded-xl' >Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      </div>

      
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg/black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>StrawBery'S</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 px-2 rounded-xl' >Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/8605817/pexels-photo-8605817.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      </div>
    </div>
  )
}

export default HeadlineCard
