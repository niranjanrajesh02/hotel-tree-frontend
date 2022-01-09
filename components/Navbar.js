import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp, UserIcon } from './Icons'
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
const Navbar = () => {
  const { user, error, isLoading } = useUser();
  const [menuClicked, setMenuClicked] = useState(null);
  return (
    <div className='w-full bg-lightred flex flex-row items-center p-2 gap-2 justify-between'>
      <div className='flex w-4/12  gap-5 justify-evenly'>


      </div>

      <div className='w-24 h-24 rounded-full '>
        <Link href="/">
          <Image src="/images/LogoMain.png" className='rounded-full cursor-pointer' width={100} height={100} layout='responsive' />
        </Link>
      </div>
      <div className='w-4/12 flex justify-center hover:text-white'>
        {user && (
          <Link href="/profile">
            <div className='w-min cursor-pointer'>
              <UserIcon />
            </div>
          </Link>
        )}
        {!user && (
          <div>
            <a href="/api/auth/login">Login</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
