import iconGenerator from 'functions/iconGenerator'
import indianNumberConverter from 'functions/numberConverter'
import Image from 'next/image'
import React from 'react'
import { City, Dining, DiningSmall } from './Icons'

const Roomtile = ({ room }) => {
  return (
    <div className='flex mt-2'>
      <div className='w-4/12 text-center border-r-2 border-lightred flex flex-row gap-5 items-center'>
        <div className='w-24 h-24 '>
          <Image src={room.image} width={100} height={100} layout="responsive" objectFit='contain' />
        </div>
        <p>{room.name}</p>
      </div>
      <div className='w-1/12 text-center border-r-2 border-lightred  flex items-center justify-center'><p>{room.guests}</p></div>
      <div className='w-1/12 text-center border-r-2 border-lightred flex items-center justify-center'><p>{indianNumberConverter(room.disc_price)}</p></div>
      <div className='w-4/12 text-center border-r-2 justify-center flex flex-col items-center border-lightred'>
        <div>
          <div className='flex gap-3'>
            {iconGenerator(room.view)}
            <p>Beautiful {room.view} view</p>
          </div>
          <div className='mt-1 flex gap-3'>
            <DiningSmall />
            {room.breakfast === 0 ? <p>Free Delicious Breakfast included</p> : <p>Delicious Breakfast starting at {indianNumberConverter(room.breakfast)}</p>}
          </div>
        </div>
      </div>
      <div className='w-1/6 text-center border-r-2 border-lightred  flex items-center justify-center'>
        <button className='bg-lightred hover:bg-red-600 p-2 rounded-lg hover:duration-400'>
          Reserve
        </button>
      </div>
    </div>
  )
}

export default Roomtile
