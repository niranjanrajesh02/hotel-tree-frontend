import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div>
      <main className="bg-hero-lg w-full h-screen bg-no-repeat bg-cover flex items-center justify-center">
        <div className='bg-lightred w-3/6 p-5 text-center flex flex-col gap-2 rounded-lg items-center'>
          <h1 className='text-4xl font-medium '>Welcome to Hotel Tree</h1>
          <p className='text-xl font-light '>Your one stop shop for all hotels in India</p>
          <div className='w-full'>
            <input type="text" className='p-2 rounded-lg w-4/6 mt-2 outline-none text-black' placeholder='Search Locations or Properties' />
          </div>
          <div className='w-36 h-36 mt-5 rounded-full '>
            <Image src="/images/LogoMain.png" className='rounded-full' width={100} height={100} layout='responsive' />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero