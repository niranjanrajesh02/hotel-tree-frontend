import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 5, label: 'Excellent (5.0)' },
  { value: 4.5, label: 'Very Good (4.5)' },
  { value: 4, label: 'Good (4)' },
  { value: 3.5, label: 'Fair (3.5)' },
]


const RatingsDrop = ({ setRatings }) => {
  function handleChange(selectedOption) {
    setRatings(selectedOption.value)
  }
  return (
    <div className='w-40 text-sm text-black h-4'>
      <Select options={options} defaultValue={"1"} onChange={handleChange} />
    </div>
  )
}


export default RatingsDrop
