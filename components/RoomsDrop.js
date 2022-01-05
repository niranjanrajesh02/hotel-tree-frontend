import React, { Component } from 'react'
import Select from 'react-select'
import { useRouter } from 'next/router'
const options = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
]


const RoomsDrop = ({ setRooms, rooms }) => {
  const router = useRouter();
  function handleChange(selectedOption) {
    setRooms(selectedOption.value)
  }

  let defaultIndex = 1;
  if (router.pathname.includes("/hotels")) {
    defaultIndex = options.findIndex(x => x.label === rooms);
  }
  return (
    <div className='mt-4 text-black h-4'>
      <Select options={options} defaultValue={options[defaultIndex]} onChange={handleChange} />
    </div>
  )
}


export default RoomsDrop
