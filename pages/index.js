import AboutUs from '@components/AboutUs'
import Hero from '@components/Hero'
import Navbar from '@components/Navbar'
import RecommendedHotels from '@components/RecommendedHotels'
import Head from 'next/head'
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0';
import { verifyUser } from 'functions/databaseFunctions'
import { useEffect } from 'react'

export default function Home() {
  const { user, error, isLoading } = useUser();
  useEffect(() => {
    {
      (async () => {
        if (user) {
          await verifyUser(user);
        }
      })()

    }
  }, [user])
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
