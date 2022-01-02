import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Datepicker from './Datepicker'
import RoomsDrop from './RoomsDrop'
import SearchDrop from './SearchDrop'
import { cities } from 'data/cities'
import Fuse from 'fuse.js';
import { useRouter } from 'next/router'

const Hero = () => {
  const [searchDrop, setSearchDrop] = useState(false)
  const [searchText, setSearchText] = useState("")
  const [dispCities, setDispCities] = useState([])
  const [cityText, setCityText] = useState("");
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [rooms, setRooms] = useState(1)
  const router = useRouter();
  function handleSearchRooms() {
    router.push(`/hotels?city=${cityText}&checkin=${checkInDate}&checkout=${checkOutDate}&rooms=${rooms}`)
  }

  function handleSearchChange(text) {
    setSearchText(text)
  }
  let fuse;
  if (cities) {
    fuse = new Fuse(cities, {
      keys: ['label'],
      includeScore: true,
      threshold: 0.4
    })
  }
  useEffect(() => {
    if (searchText.length > 2) {
      setSearchDrop(true);
      const results = fuse.search(searchText);
      setDispCities(results)
    } else {
      setSearchDrop(false);
      setDispCities([]);
    }
  }, [searchText])


  return (
    <div>
      <main className="bg-hero-lg w-full h-screen bg-no-repeat bg-cover flex items-center justify-center">
        <div className='bg-lightred w-3/6 p-5 text-center flex flex-col gap-2 rounded-lg items-center'>
          <h1 className='text-4xl font-medium '>Welcome to Hotel Tree</h1>
          <p className='text-xl font-light '>Your one stop shop for the most premium hotels in India</p>
          <div className='w-full mt-4 flex flex-row space-around gap-4 '>
            <div className='h-4'>
              <p>Where</p>
              <input type="text"
                onChange={(e) => { handleSearchChange(e.target.value); setCityText(e.target.value) }}
                value={cityText}
                className='p-2 mt-4 outline-none text-black text-sm h-8'
                placeholder='Search Locations' />
              {searchDrop && (
                <SearchDrop locations={dispCities} setCityText={setCityText} setSearchDrop={setSearchDrop} />
              )}
            </div>
            <div className=''>
              <p>Check In</p>
              <Datepicker handler={setCheckInDate} />
            </div>
            <div className=''>
              <p>Check Out</p>
              <Datepicker handler={setCheckOutDate} />
            </div>
            <div className=''>
              <p>Rooms</p>
              <RoomsDrop setRooms={setRooms} />
            </div>
          </div>
          <div onClick={handleSearchRooms}
            className='mt-4 text-md bg-white text-black p-4 rounded-3xl cursor-pointer 
          hover:bg-red-400 hover:text-white hover:duration-200'>
            <h3>Search for Hotels</h3>
          </div>
          <div className='w-36 h-36 mt-5 rounded-full '>
            <Image src="/images/LogoMain.png" className='rounded-full' width={100} height={100} layout='responsive' />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero
