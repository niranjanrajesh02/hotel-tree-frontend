import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp, UserIcon } from './Icons'

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(null);
  return (
    <div className='w-full bg-lightred flex flex-row items-center p-2 gap-2 justify-between'>
      <div className='flex w-4/12  gap-5 justify-evenly'>
        <div className='flex flex-row  p-1'>
          <p>Menu 1</p>
          {menuClicked === "location" ? <ChevronUp /> : <ChevronDown />}
        </div>
        <div className='flex flex-row  p-1'>
          <p>Menu 2</p>
          {menuClicked === "location" ? <ChevronUp /> : <ChevronDown />}
        </div>

      </div>

      <div className='w-24 h-24 rounded-full '>
        <Image src="/images/LogoMain.png" className='rounded-full' width={100} height={100} layout='responsive' />
      </div>
      <div className=' w-4/12 flex justify-center'>
        <UserIcon />
      </div>
    </div>
  )
}

export default Navbar
