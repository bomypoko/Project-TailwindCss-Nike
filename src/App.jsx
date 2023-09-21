import React from 'react'

const App = () => {
  return (
   <main className='p-5 '>
    <h1 className='text-center'>Hello world</h1>
    <div className='bg-black text-white h-10 rounded-xl my-4 p-2'>
      <p className='text-center '> a div</p>
    </div>

    <div className='flex justify-center space-x-3 first-line:'>
      <div className='h-16 w-16 bg-blue-500 rounded-full'></div>
      <div className='h-16 w-16 bg-blue-500 rounded-full'></div>
      <div className='h-16 w-16 bg-blue-500 rounded-full'></div>
    </div>

    <div className='grid grid-cols-3 mt-3 gap-2'>
      <div className='bg-red-300 h-12'></div>
      <div className='bg-red-300 h-12'></div>
      <div className='bg-red-300 h-12'></div>
    </div>
    <div className='hidden md:block'>
      <p>i will appear a device above 768px</p>
    </div>
    <div className='max-md:block hidden'>
      <p>I will appear a device below 1111</p>
    </div>
   </main>
  )
}

export default App