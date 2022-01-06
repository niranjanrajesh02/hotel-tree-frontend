import { user_data } from 'data/user-dummy'
import Link from 'next/link'
import React, { useState } from 'react'
import HotelTile from '@components/HotelTile'
import { hotelsData } from 'data/hotels-dummy'
import Image from 'next/image'
import indianNumberConverter from 'functions/numberConverter'

const bookings = () => {
  const [loadedUser, setLoadedUser] = useState(user_data)
  return (
    <div className='px-20'>
      <div className='lg:w-full text-center text-3xl  lg:text-5xl w-max flex  justify-center mt-5'>
        <p className='text-lightred'>{loadedUser.user_name}</p>
        <h1 className=''>'s Bookings</h1>
      </div>
      <div>
        {loadedUser.bookings.map((item, ind) => (

          <div className='flex lg:flex-row flex-col flex-wrap justify-center'>
            <div className='p-5 lg:px-20 mt-10 lg:w-5/12 border flex items-center gap-5 border-lightred rounded-lg'>
              <div className='w-32 h-32 '>
                <Image src={item.image} height={100} width={100} layout='responsive' objectFit='contain' />
              </div>
              <div>
                <h4 className='text-xl font-semibold text-lightred'>{item.hotel_name}</h4>
                <p>Location: {item.city}</p>
                <p>Room name: {item.room_name}</p>
                <p>Number of Rooms: {item.rooms}</p>
                <p>{indianNumberConverter(item.total_cost)}</p>
              </div>
            </div>
          </div>
        )
        )}


      </div>
    </div>

  )
}

export default bookings
