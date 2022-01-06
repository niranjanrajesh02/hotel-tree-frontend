import AboutUs from '@components/AboutUs'
import Hero from '@components/Hero'
import Navbar from '@components/Navbar'
import RecommendedHotels from '@components/RecommendedHotels'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>HotelTree | India's most premium hotels</title>
      </Head>
      <div className='w-full text-white'>
        <Hero />
        <RecommendedHotels />
        <AboutUs />
      </div>
    </>
  )
}
