import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { label: "Swimming Pool", value: "swimming_pool" },
  { label: "Bar", value: "bar" },
  { label: "Car Parking", value: "parking" },
  { label: "Gym", value: "gym" },
  { label: "Pets", value: "pets" },
];

const FiltersDrop = ({ setFilters }) => {
  function handleChange(e) {
    setFilters(Array.isArray(e) ? e.map(x => x.value) : []);
  }
  return (
    <div className='w-60 text-sm text-black h-4'>
      <Select options={options} closeMenuOnSelect={false} isMulti onChange={handleChange} />
    </div>
  )
}


export default FiltersDrop
