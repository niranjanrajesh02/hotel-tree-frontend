import indianNumberConverter from 'functions/numberConverter'
import React, { useState } from 'react'
import Slider from 'react-input-slider'
import FiltersDrop from './FiltersDrop'
import RatingsDrop from './RatingsDrop'
import SortDrop from './SortDrop'
const FiltersMenu = () => {
  const [priceFilter, setPriceFilter] = useState(1000)
  const [addFilters, setAddFilters] = useState([]);
  const [ratings, setRatings] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  return (
    <div className='lg:px-40 lg:border-t-4 lg:border-b-4 border-lightred lg:py-10 flex flex-col  mt-4 lg:mt-0 gap-10 lg:gap-0 lg:flex-row justify-center'>
      <div className='border-none lg:border-r  px-4 border-gray-400 relative z-0 w-max'>
        <h5>Price per night</h5>
        <Slider
          axis="x"
          xstep={1000}
          xmin={1000}
          xmax={100000}
          x={priceFilter}
          onChange={({ x }) => setPriceFilter(parseFloat(x.toFixed(2)))}
        />
        <div className='flex justify-between text-xs'>
          <p>{indianNumberConverter(priceFilter)}+</p>
          <p>Max: {indianNumberConverter(100000)}</p>
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
  )
}

export default FiltersMenu
