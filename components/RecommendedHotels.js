import { hotelsData } from 'data/hotels-dummy'
import React from 'react'
import HotelTile from './HotelTile'

const RecommendedHotels = () => {
  return (
    <section className='text-black  h-screen '>
      <div className='h-20 mb-5 bg-lightred border-lightred' />
      <div className='px-20 text-center'>
        <h1 className='text-4xl underline'>Hotels that we think you will like</h1>
      </div>
      <div className='flex lg:flex-row flex-col flex-wrap justify-center'>
        <div className='px-5 lg:px-20 mt-10 lg:w-5/12'>
          <HotelTile hotel={hotelsData[0]} />
        </div>
        <div className='px-5 lg:px-20 mt-10 lg:w-5/12'>
          <HotelTile hotel={hotelsData[0]} />
        </div>
        <div className='px-5 lg:px-20 mt-10 lg:w-5/12'>
          <HotelTile hotel={hotelsData[0]} />
        </div>
        <div className='px-5 lg:px-20 mt-10 lg:w-5/12'>
          <HotelTile hotel={hotelsData[0]} />
        </div>
      </div>
    </section>
  )
}

export default RecommendedHotels
