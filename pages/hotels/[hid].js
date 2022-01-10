import React, { useEffect, useState } from 'react'
import { hotelsData } from 'data/hotels-dummy'
import { Dining, LocationSmall } from '@components/Icons'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import iconGenerator from 'functions/iconGenerator';
import indianNumberConverter from 'functions/numberConverter';
import Roomtile from '@components/Roomtile';
import Review from '@components/Review';
import { useRouter } from 'next/router'
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HotelPage = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const [hotel, setHotel] = useState(null)
  const [reviewMode, setReviewMode] = useState(false)
  const [reviewTitle, setReviewTitle] = useState("")
  const [reviewBody, setReviewBody] = useState("")
  const [rating, setRating] = useState(1)

  useEffect(() => {
    // console.log(router.query);
    if (router.query.hid) {
      var config = {
        method: 'get',
        url: `/hotels/${router.query.hid}`,
      };

      axios(config)
        .then(function (response) {
          console.log((response.data));
          setHotel(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [router.query])

  function reviewSubmitHandler() {
    var data = JSON.stringify({
      "user_id": user.nickname,
      "hotel_id": router.query.hid,
      "review_title": reviewTitle,
      "review_text": reviewBody,
      "rating": rating
    });

    var config = {
      method: 'post',
      url: '/hotels/review',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log((response.data));
        router.reload();
      })
      .catch(function (error) {
        console.log(error);
      });

  }


  function alreadySaved() {
    if (!user) {
      return false
    }
    var config = {
      method: 'get',
      url: `/user/verify/${user.nickname}`,
    };

    axios(config)
      .then(function (response) {
        console.log((response.data));
        for (let i = 0; i < response.data.saved; i++) {
          if (response.data.saved[i].hotel_name === hotel.name) {
            console.log("already saved");
            return true
          }
        }
        return false
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  function saveHotelHandler() {
    if (!user) {
      toast.error('You need to be signed in to save!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    else {
      var data = JSON.stringify({
        "hotel_id": router.query.hid,
        "user_id": user.nickname
      });

      var config = {
        method: 'post',
        url: '/hotels/save',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };
      axios(config)
        .then(function (response) {
          console.log((response.data));
          router.push('/profile/saved')
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <div className='mx-20 mt-5'>
      {(hotel && router.query.hid && !isLoading) && (
        <>

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
                {hotel.images?.map((item, ind) => (
                  <div key={ind}>
                    <img src={item} />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className='border-2 border-lightred p-5 rounded-lg lg:w-2/6 relative'>

              <div className=''>
                <p>{hotel.description}</p>
                <h4 className='font-semibold mt-2'>Highlights include:</h4>
                <ul className='list-disc ml-5 '>
                  {hotel.tags?.map((tag, ind) => {
                    return (
                      <>{iconGenerator(tag)}</>
                    )
                  })}
                </ul>
              </div>
              <div className='mt-10 flex  w-full justify-between '>
                <div className=''>
                  <h5>Starting At</h5>
                  <div className='flex gap-2 items-center'>
                    <p className='font-bold text-lg'>{indianNumberConverter(hotel?.base_price)}</p>
                  </div>
                </div>
                <div className=' text-right'>
                  <div className='flex gap-2 items-center'>
                    <div className='p-2 bg-lightred rounded-lg w-max'>{hotel?.avg_rating.toFixed(1)}</div>
                    <p>{hotel?.rating_result}</p>
                  </div>
                  <p onClick={() => window.scrollTo(0, 10000)} className='cursor-pointer underline hover:text-lightred w-full text-right'>{hotel?.reviews.length} reviews</p>
                </div>
              </div>
              <div>
                <ToastContainer
                  position="top-left"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                {alreadySaved() ? <p>Saved!</p> : <button onClick={saveHotelHandler} className='bg-lightred p-2 rounded-lg hover:bg-red-600 w-max'>Save for later</button>}

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
            {hotel?.rooms.map((item, ind) => (
              <Roomtile user={user} rooms={router.query.rooms} room={item} />
            ))}
          </section>
          <section className='my-10'>
            <h2 className='text-2xl'>Ratings and Reviews</h2>
            <div className='flex gap-2 items-center text-xl mt-2 justify-center'>
              <div className='flex items-center gap-5'>
                <div className='p-2 bg-lightred rounded-lg w-max'>{hotel.avg_rating.toFixed(1)}</div>
                <p>{hotel.rating_result}</p>
              </div>
            </div>
            <div className='flex flex-wrap gap-20 mt-5 justify-center'>
              {console.log(hotel.reviews)}
              {hotel.reviews.map((item, ind) => <Review review={item} />)}
            </div>
            {(!reviewMode && user) && (

              <div className='flex justify-center mt-5'>
                <button onClick={() => setReviewMode(true)}
                  className='bg-lightred p-2 rounded-lg hover:bg-red-600'>
                  Write a review
                </button>
              </div>
            )}
            {(!reviewMode && !user) && (
              <div className='flex justify-center mt-5'>
                <p>You need to be logged in to write a review!</p>
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
                  <button onClick={reviewSubmitHandler}
                    className='bg-lightred p-2 rounded-lg hover:bg-red-600 w-max'>
                    Submit Review
                  </button>
                </div>
              </div>
            )}
          </section>
        </>
      )}
    </div >
  )
}

export default HotelPage
