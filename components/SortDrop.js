import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { label: "Featured", value: null },
  { label: "User Ratings", value: "avg_rating: -1" },
  { label: "Price: Ascending", value: "base_price:1" },
  { label: "Price: Descending", value: "base_price:-1" },
  { label: "Alphabetical: Ascending", value: "name:1" },
  { label: "Alphabetical: Descending", value: "name:-1" },
]


const SortDrop = ({ setSortOrder }) => {
  function handleChange(selectedOption) {
    setSortOrder(selectedOption.value)
  }
  return (
    <div className='w-52 text-sm text-black h-4'>
      <Select options={options} defaultValue={"Featured"} onChange={handleChange} />
    </div>
  )
}
export default SortDrop
