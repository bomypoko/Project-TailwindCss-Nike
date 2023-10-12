import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'


const Hero = () => {
  return (
    <section id="home"className='w-full flex xl:flex-row flex-col p-2 border-2 border-red-300 justify-center gap-10 min-h-screen max-container'>
        <div className='relative flex flex-col justify-center items-start  w-full max-xl:padding-x pt-28'>
          <p>Our Summer Collections</p>
          <h1> <span>The New Arrival</span> <br/> <span>Nike Shoes</span> </h1>
          <p>Discover stylish Nike arrivals,quality comfort , and innovation for your active life.</p>
          
          {/* Button Component passing label and iconURL to the component */}
          <Button 
            label="Shop Now"
            iconURL={arrowRight}
          />
          <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          
          {/* import statistics from Constants */}
          {statistics.map((item) => (
            
            <div key={item.id}>
              <p>{item.value}</p>
              <p>{item.label}</p>
              
            </div>
          ))}
         
          </div>
        </div>
    </section>
  )
}

export default Hero