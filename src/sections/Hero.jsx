import React from 'react'

const Hero = () => {
  return (
    <section id="home"className='w-full flex xl:flex-row flex-col p-2 border-2 border-red-300 justify-center gap-10 min-h-screen max-container'>
        <div className='relative flex flex-col justify-center items-start  w-full max-xl:padding-x pt-28'>
          <p>Our Summer Collections</p>
          <h1>
            <span>The New Arrival</span>
            <br />
            <span>Nike</span> 
          </h1>
          <p>Discover stylish Nike arrivals,quality comfort , and innovation for your active life.</p>
        </div>  
       
    </section>
  )
}

export default Hero