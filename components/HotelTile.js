
import indianNumberConverter from 'functions/numberConverter'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LocationSmall, RightArrow } from './Icons'

const HotelTile = ({ hotel }) => {
  return (
    <Link href={`/hotels/${hotel.id}`}>

      <div className='bg-white border-lightred border-2 p-5 mb-5 rounded-xl flex flex-row relative cursor-pointer z-0 hover:bg-gray-200'>
        <div className='w-48 h-48  '>
          <Image src={hotel.images[0]} width={100} height={100} layout='responsive' className='rounded-lg' objectFit="cover" />
        </div>
        <div className='ml-5 w-10/12'>
          <div className='flex flex-row justify-between'>
            <h2 className='text-lg font-bold'>{hotel.name}</h2>
            <div className='flex gap-2 items-center'>
              <div className='p-2 bg-lightred rounded-lg w-max'>{hotel.avg_rating}</div>
              <p>Excellent</p>
            </div>
          </div>
          <div>
            <div className='flex gap-1 items-center'>
              <LocationSmall />
              <p>{hotel.short_address}</p>
            </div>
            <p className='text-xs'>{hotel.distance_center} kms from city center</p>
          </div>
          <div className=' mt-5 flex flex-row justify-between w-full'>
            <div>
              <h5 className='font-semibold'>Featured Room</h5>
              <div className='text-xs'>
                <p>{hotel.rooms[0].name}</p>
                <p>For {hotel.rooms[0].guests} guests</p>
              </div>
            </div>
            <div className='flex flex-row gap-2 items-center w-max'>
              <p className='line-through text-xs text-red-600'>{indianNumberConverter(hotel.rooms[0].full_price)}</p>
              <p>{indianNumberConverter(hotel.rooms[0].disc_price)}</p>
            </div>
          </div>
          <div className='bg-lightred w-max mt-1 p-2 text-sm rounded-lg flex gap-1 items-center absolute right-5 hover:bg-red-600 cursor-pointer'>
            <button>See More</button>
            <a className='mt-1'><RightArrow /></a>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HotelTile
