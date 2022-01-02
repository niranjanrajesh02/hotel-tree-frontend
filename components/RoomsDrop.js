import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
]


const RoomsDrop = ({ setRooms }) => {
  function handleChange(selectedOption) {
    setRooms(selectedOption.value)
  }
  return (
    <div className='mt-4 text-black h-4'>
      <Select options={options} defaultValue={"1"} onChange={handleChange} />
    </div>
  )
}


export default RoomsDrop
