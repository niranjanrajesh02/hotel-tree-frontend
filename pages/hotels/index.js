import React from 'react'
import { useRouter } from 'next/router'
import SearchContainer from '@components/SearchContainer';
import Head from 'next/head';
import FiltersMenu from '@components/FiltersMenu';
import { hotelsData } from 'data/hotels-dummy';
import HotelTile from '@components/HotelTile';

const index = () => {
  const router = useRouter();
  // console.log(router.query);
  return (
    <div className=''>
      <Head>
        <title>Hotels in {router.query.city}</title>
      </Head>
      <div className='flex flex-row items-start lg:items-center relative px-5 z-10 text-sm lg:text-md lg:px-20 lg:flex-col bg-lightgrey'>
        <SearchContainer />
        <FiltersMenu />
      </div>
      <div className=' bg-grey lg:px-40 z-1 pt-5 relative '>
        {hotelsData.map((item, ind) => {
          return (
            <div key={ind}>
              <HotelTile hotel={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default index
