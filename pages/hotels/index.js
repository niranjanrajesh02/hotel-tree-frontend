import React from 'react'
import { useRouter } from 'next/router'
import SearchContainer from '@components/SearchContainer/SearchContainer';
import Head from 'next/head';
import FiltersMenu from '@components/FiltersMenu';

const index = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <Head>
        <title>Hotels in {router.query.city}</title>
      </Head>
      <div className='flex flex-row items-start lg:items-center px-5 text-sm lg:text-md lg:px-0 lg:flex-col bg-lightgrey'>
        <SearchContainer />
        <FiltersMenu />
      </div>
    </>
  )
}

export default index
