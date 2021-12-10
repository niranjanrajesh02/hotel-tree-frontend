import Hero from '@components/Hero'
import Navbar from '@components/Navbar'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className='w-screen text-white'>
      {/* <Navbar /> */}
      <Hero />
    </div>
  )
}
