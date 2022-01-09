import React, { useState } from 'react'
import { hotelsData } from 'data/hotels-dummy'
import { Dining, LocationSmall } from '@components/Icons'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import iconGenerator from 'functions/iconGenerator';
import indianNumberConverter from 'functions/numberConverter';
import Roomtile from '@components/Roomtile';
import Review from '@components/Review';


const HotelPage = () => {
  const [hotel, setHotel] = useState(hotelsData[0])
  const [reviewMode, setReviewMode] = useState(false)
  const [reviewTitle, setReviewTitle] = useState("")
  const [reviewBody, setReviewBody] = useState("")
  const [rating, setRating] = useState(1)


  const images = [];
  hotel?.images.forEach((item) => images.push({ original: item }))
  console.log(images);
  return (
    <div className='mx-20 mt-5'>
      <div>
        <h1 className='text-3xl font-bold'>{hotel.name}</h1>
        <div className='flex mt-4 items-center gap-2'>
          <LocationSmall />
          <p>{hotel.address}</p>
          <p className='text-sm underline'>{hotel.distance_center} km away from city center</p>
        </div>
      </div>
      <div className='mt-5 px-0 flex flex-col lg:flex-row justify-around'>
        <div className='lg:w-2/6'>
          <Carousel showArrows={false}>
            {images.map((item, ind) => (
              <div key={ind}>
                <img src={item.original} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className='border-2 border-lightred p-5 rounded-lg lg:w-2/6 relative'>

          <div className=''>
            <p>{hotel.description}</p>
            <h4 className='font-semibold mt-2'>Highlights include:</h4>
            <ul className='list-disc ml-5 '>
              {hotel.tags.map((tag, ind) => {
                return (
                  <>{iconGenerator(tag)}</>
                )
              })}
            </ul>
          </div>
          <div className='mt-10 flex  w-full justify-between '>
            <div className=''>
              <h5>Base Price</h5>
              <div className='flex gap-2 items-center'>
                <p className='line-through text-sm text-red-600'>{indianNumberConverter(hotel.rooms[0].full_price)}</p>
                <p className='font-bold text-lg'>{indianNumberConverter(hotel.rooms[0].disc_price)}</p>
              </div>
            </div>
            <div className=' text-right'>
              <div className='flex gap-2 items-center'>
                <div className='p-2 bg-lightred rounded-lg w-max'>{hotel.avg_rating}</div>
                <p>{hotel.rating_result}</p>
              </div>
              <p onClick={() => window.scrollTo(0, 10000)} className='cursor-pointer underline hover:text-lightred w-full text-right'>{hotel.reviews.length} reviews</p>
            </div>
          </div>
          <div>
            <button className='bg-lightred p-2 rounded-lg hover:bg-red-600 w-max'>Save for later</button>
          </div>
        </div>
      </div >
      <section className='my-10'>
        <h2 className='text-2xl'>Rooms Available </h2>
        <div className='bg-lightred flex lg:mt-2'>
          <div className='w-4/12 text-center border-r-2 border-white'><p>Room</p></div>
          <div className='w-1/12 text-center border-r-2 border-white'><p>Guests</p></div>
          <div className='w-1/12 text-center border-r-2 border-white'><p>Special Price</p></div>
          <div className='w-4/12 text-center border-r-2 border-white'><p>Highlights</p></div>
          <div className='w-1/6 text-center border-r-2 border-white'><p>Book Now</p></div>
        </div>
        {hotel.rooms.map((item, ind) => (
          <Roomtile room={item} />
        ))}
      </section>
      <section className='my-10'>
        <h2 className='text-2xl'>Ratings and Reviews</h2>
        <div className='flex gap-2 items-center text-xl mt-2 justify-center'>
          <div className='flex items-center gap-5'>
            <div className='p-2 bg-lightred rounded-lg w-max'>{hotel.avg_rating}</div>
            <p>{hotel.rating_result}</p>
          </div>
        </div>
        <div className='flex flex-wrap gap-20 mt-5 justify-center'>
          {hotel.reviews.map((item, ind) => <Review review={item} />)}
        </div>
        {!reviewMode && (
          <div className='flex justify-center mt-5'>
            <button onClick={() => setReviewMode(true)}
              className='bg-lightred p-2 rounded-lg hover:bg-red-600'>
              Write a review
            </button>
          </div>
        )}
        {reviewMode && (
          <div className='flex flex-col gap-5 p-2 mt-5'>
            <div className='flex gap-40'>
              <input
                className='p-2 focus:outline-none rounded-lg border border-lightred w-4/6'
                type="text" placeholder="Review Title"
                onChange={(e) => setReviewTitle(e.target.value)} />
              <div className='flex items-center gap-5'>
                <p>Your Rating:</p>
                <input type="number"
                  className='p-2 focus:outline-none rounded-lg w-20 border border-lightred'
                  min={1} max={5} onChange={(e) => setRating(e.target.value)}></input>
              </div>
            </div>
            <textarea rows={10}
              className='p-2 focus:outline-none rounded-lg border border-lightred '
              placeholder="Review Body"
              onChange={(e) => setReviewBody(e.target.value)} />
            <div className='flex justify-center gap-5'>
              <button onClick={() => setReviewMode(false)} className='bg-lightred w-max p-2 rounded-lg hover:bg-red-600'>Go back</button>
              <button onClick={() => setReviewMode(true)}
                className='bg-lightred p-2 rounded-lg hover:bg-red-600 w-max'>
                Submit Review
              </button>
            </div>
          </div>
        )}
      </section>
    </div >
  )
}

export default HotelPage
