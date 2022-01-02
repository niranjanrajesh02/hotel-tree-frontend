import React, { useState, useEffect } from 'react'
import Datepicker from '../Datepicker'
import RoomsDrop from '../RoomsDrop'
import SearchDrop from '../SearchDrop'
import { cities } from 'data/cities'
import Fuse from 'fuse.js';
import { useRouter } from 'next/router'
const SearchContainer = () => {
  const [searchDrop, setSearchDrop] = useState(false)
  const [searchText, setSearchText] = useState("")
  const [dispCities, setDispCities] = useState([])
  const [cityText, setCityText] = useState("");
  const [checkInDate, setCheckInDate] = useState(new Date)
  const [checkOutDate, setCheckOutDate] = useState(new Date)
  const [rooms, setRooms] = useState(1)
  const router = useRouter();
  const isHotelsPage = router.pathname.includes("hotels")
  useEffect(() => {
    if (router && isHotelsPage) {
      setCityText(router.query.city)
    }
  }, [router])
  function handleSearchRooms() {
    if (cityText === "") {
      return
    } else {
      router.push(`/hotels?city=${cityText}&checkin=${checkInDate}&checkout=${checkOutDate}&rooms=${rooms}`)
    }
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
    if (searchText.length >= 1) {
      setSearchDrop(true);
      const results = fuse.search(searchText);
      setDispCities(results)
    } else {
      setSearchDrop(false);
      setDispCities([]);
    }
  }, [searchText])


  return (
    <>
      <div className={`${isHotelsPage ? "flex flex-col bg-lightgrey lg:flex-row justify-center items-center gap-5 pb-5" : "flex flex-col items-center"}`}>
        <div className={`${isHotelsPage ? "flex flex-row" : "w-full"} mt-4 flex flex-col lg:flex-row space-around gap-4 `}>
          <div className='lg:h-4'>
            <p>Where</p>
            <input type="text"
              onChange={(e) => { handleSearchChange(e.target.value); setCityText(e.target.value) }}
              value={cityText}
              className='p-2 mt-4 outline-none text-black text-sm lg:h-8'
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
          className={`${isHotelsPage ? "mt-8" : "mt-10 lg:my-4  "}  text-md bg-white text-black p-4 rounded-3xl cursor-pointer 
        hover:bg-red-400 hover:text-white hover:duration-200 `}>
          <h3>Search for Hotels</h3>
        </div>
      </div>
    </>
  )
}

export default SearchContainer
