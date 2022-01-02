import React from 'react'
import { Location } from './Icons'


const SearchDrop = ({ locations, setCityText, setSearchDrop }) => {
  return (
    <div className='bg-white rounded p-2 text-sm text-black mt-4'>
      {locations.map((city, ind) => {
        if (ind > 2) {
          return
        }
        return (
          <div key={ind} onClick={() => { setCityText(city.item.label); setSearchDrop(false) }}
            className='flex gap-5 my-1 hover:bg-lightred cursor-pointer p-1'><Location /> <p>{city.item.label}</p></div>
        )
      })}
      {locations.length === 0 && <p className='text-xs'>We do not offer our services in that city yet!</p>}
    </div>
  )
}

export default SearchDrop
