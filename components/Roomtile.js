import iconGenerator from 'functions/iconGenerator'
import indianNumberConverter from 'functions/numberConverter'
import Image from 'next/image'
import React from 'react'
import { City, Dining, DiningSmall } from './Icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import axios from 'axios'
const Roomtile = ({ room, rooms, user }) => {
  const router = useRouter();
  function reserveHandler() {
    if (!user) {
      toast.error('You need to be signed in to reserve!', {
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
        "room_id": room._id,
        "user_id": user.nickname,
        "rooms": rooms ? rooms : 1
      });

      var config = {
        method: 'post',
        url: '/hotels/book',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios(config)
        .then(function (response) {
          console.log((response.data));
          router.push("/profile/bookings")
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <div className='flex mt-2'>
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
      <div className='w-1/6 text-center border-r-2 border-lightred  flex flex-col  items-center justify-center'>
        <button onClick={reserveHandler} className='bg-lightred hover:bg-red-600 p-2 rounded-lg hover:duration-400 mb-1 '>
          Reserve
        </button>
        <p className='text-xs text-red-500'>Hurry only {room.remaining} left!</p>
      </div>
    </div>
  )
}

export default Roomtile
