import React from 'react'
import Navbar from './Navbar'
import HeadlineCard from './HeadlineCard'
import Category from './Category'
import Hero from './Hero'
import Food from './Food'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlineCard/>
      <Food/>
      <Category/>
    </div>
  )
}

export default Home
