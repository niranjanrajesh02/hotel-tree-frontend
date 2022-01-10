import { user_data } from 'data/user-dummy'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import HotelTile from '@components/HotelTile'
import { hotelsData } from 'data/hotels-dummy'
import Image from 'next/image'
import indianNumberConverter from 'functions/numberConverter'
import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios'

const Saved = () => {
  const { user, error, isLoading } = useUser();
  const [loadedUser, setLoadedUser] = useState(null)

  useEffect(() => {
    if (user) {
      var config = {
        method: 'get',
        url: `/user/verify/${user.nickname}`,
      };

      axios(config)
        .then(function (response) {
          console.log((response.data));
          setLoadedUser(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });

    }
  }, [user])

  return (
    <div className='px-20'>
      {loadedUser && (
        <>
          <div className='lg:w-full text-center text-3xl  lg:text-5xl w-max flex  justify-center mt-5'>
            <p className='text-lightred'>{loadedUser.user_name}</p>
            <h1 className=''>'s Saved Hotels</h1>
          </div>
          <div>
            {loadedUser.saved.map((item, ind) => (

              <div className='flex lg:flex-row flex-col flex-wrap justify-center '>
                <Link href={`/hotels/${item.hotel_id}`}>
                  <div className='p-5 lg:px-20 mt-10 lg:w-5/12 border flex items-center gap-5 border-lightred cursor-pointer hover:bg-gray-200 rounded-lg'>
                    <div className='w-32 h-32 '>
                      <Image src={item.image} height={100} width={100} layout='responsive' objectFit='contain' />
                    </div>
                    <div>
                      <h4 className='text-xl font-semibold text-lightred'>{item.hotel_name}</h4>
                      <p>Location: {item.city}</p>
                    </div>
                  </div>
                </Link>
              </div>
            )
            )}
          </div>
        </>
      )}
    </div>

  )
}

export default Saved
