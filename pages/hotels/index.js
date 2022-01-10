import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SearchContainer from '@components/SearchContainer';
import Head from 'next/head';
import FiltersMenu from '@components/FiltersMenu';
import { hotelsData } from 'data/hotels-dummy';
import HotelTile from '@components/HotelTile';
import Slider from 'react-input-slider'
import RatingsDrop from '@components/RatingsDrop';
import FiltersDrop from '@components/FiltersDrop';
import SortDrop from '@components/SortDrop';
import indianNumberConverter from 'functions/numberConverter';
import axios from 'axios';
import Loading from '@components/Loading';

const index = () => {
  const router = useRouter();
  // console.log(router.query);
  const [hotels, setHotels] = useState(null);
  const [priceFilter, setPriceFilter] = useState(1000);
  const [addFilters, setAddFilters] = useState([]);
  const [ratings, setRatings] = useState(0);
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    if (router.query) {

      let amenitiesVal = "";
      for (let i = 0; i < addFilters.length; i++) {
        amenitiesVal += `amenities[]=${addFilters[i]}&`;
      }
      console.log(amenitiesVal);


      // console.log("amenitiesVal" + `&urmom${3 + 4}`);
      var config = {
        method: 'get',
        url: `/hotels/?minPrice=${priceFilter}&minRating=${ratings}&sort=${sortOrder}&city=${router.query.city}&${amenitiesVal}`,
      };
      axios(config)
        .then(function (response) {
          console.log((response.data));
          setHotels(response.data)
          console.log(config);
        })
        .catch(function (error) {
          console.error(error);
        });

    }
  }, [priceFilter, setPriceFilter, addFilters, ratings, sortOrder, router.query])

  return (
    <div className='relative'>
      <Head>
        <title>Hotels in {router.query.city}</title>
      </Head>
      {hotels && (
        <>
          <div className='flex flex-row items-start lg:items-center relative px-5 z-10 text-sm lg:text-md lg:px-20 lg:flex-col bg-lightgrey'>
            <SearchContainer />
            <div className='lg:px-40 lg:border-t-4 lg:border-b-4 border-lightred lg:py-10 flex flex-col  mt-4 lg:mt-0 gap-10 lg:gap-0 lg:flex-row justify-center'>
              <div className='border-none lg:border-r  px-4 border-gray-400 relative z-0 w-max'>
                <h5>Price per night</h5>
                <Slider
                  axis="x"
                  xstep={1000}
                  xmin={1000}
                  xmax={75000}
                  x={priceFilter}
                  onChange={({ x }) => setPriceFilter(parseFloat(x.toFixed(2)))}
                />
                <div className='flex justify-between text-xs'>
                  <p>{indianNumberConverter(priceFilter)}+</p>
                  <p>Max: {indianNumberConverter(75000)}</p>
                </div>
              </div>
              <div className='border-none lg:border-r px-4 border-gray-400 relative z-0 w-max bg-gray-50'>
                <h5 className='mb-2'>Guest Rating</h5>
                <RatingsDrop setRatings={setRatings} />
              </div>
              <div className='border-none lg:border-r px-4 border-gray-400 relative z-0 w-max bg-gray-50'>
                <h5 className='mb-2'>Amenities</h5>
                <FiltersDrop setFilters={setAddFilters} />
              </div>
              <div className='px-4 relative z-0 w-max bg-gray-50 text-black'>
                <h5 className='mb-2'>Sort</h5>
                <SortDrop setSortOrder={setSortOrder} />
              </div>
            </div>
          </div>
          <div className=' bg-grey lg:px-40 z-1 pt-5 relative '>
            {hotels.map((item, ind) => {
              return (
                <div key={ind}>
                  <HotelTile hotel={item} />
                </div>
              )
            })}
          </div>
        </>
      )}
      {!hotels && (
        <Loading />
      )}
    </div>
  )
}

export default index
