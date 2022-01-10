import { hotelsData } from 'data/hotels-dummy'
import React, { useEffect, useState } from 'react'
import HotelTile from './HotelTile'
import axios from 'axios'
import { useUser } from '@auth0/nextjs-auth0';

const defaultHotels = {}

const RecommendedHotels = () => {
  const { user, error, isLoading } = useUser();
  const [loadedUser, setLoadedUser] = useState(null)
  const [hotels, setHotels] = useState(null)


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

  useEffect(() => {
    if (loadedUser) {
      var config = {
        method: 'get',
        url: `/hotels/recommended/${loadedUser.last_city}`,
        headers: {}
      };

      axios(config)
        .then(function (response) {
          console.log((response.data));
          setHotels(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });

    }
  }, [loadedUser])


  return (
    <section className='text-black '>
      {(loadedUser) && (
        <>
          <div className='h-20 mb-5 bg-lightred border-lightred' />
          <div className='px-20 text-center'>
            <h1 className='text-4xl underline mb-2'>Hotels that we think you will like</h1>
            <p>Since you searched for hotels in<a className='text-lightred'> {loadedUser.last_city}</a></p>
          </div>
          <div className='flex lg:flex-row flex-col flex-wrap justify-center'>
            {hotels?.map((item, ind) => (
              <div className='px-5 lg:px-20 mt-10 lg:w-5/12'>
                <HotelTile hotel={item} rooms={1} />
              </div>
            ))}
          </div>
        </>
      )}


    </section>
  )
}

export default RecommendedHotels
