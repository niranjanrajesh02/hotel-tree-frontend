import { Edit } from '@components/Icons'
import { user_data } from 'data/user-dummy'
import Link from 'next/link'
import React, { useState } from 'react'

const Profile = () => {
  const [loadedUser, setLoadedUser] = useState(user_data)
  const [editMode, setEditMode] = useState(false)
  const [nameField, setNameField] = useState(user_data.user_name);
  const [contactField, setContactField] = useState(user_data.contact_no);
  const [addressField, setAddressField] = useState(user_data.address);
  const [emailField, setEmailField] = useState(user_data.email);
  return (
    <div className='px-20'>
      <div className='w-full text-center text-5xl  flex gap-2 justify-center mt-5'>
        <h1 className=''>Welcome,</h1>
        <p className='text-lightred'>{loadedUser.user_name}</p>
      </div>
      <div className='flex flex-col items-center justify-center mb-5 '>
        <div className='relative lg:w-3/6 mt-10 text-center p-10 lg:p-5  rounded-lg border border-lightred'>
          {!editMode && (
            <div className='absolute right-5 top-5' onClick={() => setEditMode(true)}>
              <Edit />
            </div>
          )}
          <h3 className='text-3xl underline'>Profile Details </h3>
          <div className='mt-5'>
            <h4>Name:</h4>
            {!editMode && <p>{nameField}</p>}
            {editMode &&
              <input className='p-2 mt-1 rounded-lg border border-lightred' type="text" onChange={(e) => setNameField(e.target.value)} value={nameField}></input>
            }
          </div>
          <div className='mt-5'>
            <h4>Contact No:</h4>
            {!editMode && <p>{contactField}</p>}
            {editMode && <input className='p-2 mt-1 rounded-lg border border-lightred' type="text" onChange={(e) => setContactField(e.target.value)} value={contactField}></input>}
          </div>
          <div className='mt-5'>
            <h4> Email:</h4>
            {!editMode && <p>{emailField}</p>}
            {editMode && <input className='p-2 mt-1 rounded-lg border border-lightred' type="text" value={emailField} onChange={(e) => setEmailField(e.target.value)}></input>}
          </div>
          <div className='mt-5'>
            <h4> Address:</h4>
            {!editMode && <p>{addressField}</p>}
            {editMode && <input className='p-2 mt-1 rounded-lg border border-lightred' type="text" value={addressField} onChange={(e) => setAddressField(e.target.value)}></input>}
          </div>
          <div>
            {editMode && <button
              onClick={() => setEditMode(false)}
              className='mt-6 bg-lightred hover:bg-red-600 p-2 px-5 rounded-lg text-lg mb-2'>Save</button>}
          </div>
        </div>
        <div className='flex gap-10 mt-10 '>
          <Link href="/profile/bookings">
            <div className='cursor-pointer w-56  bg-lightred h-32 text-white flex 
        justify-center items-center rounded-lg hover:bg-red-600'>
              <h5 className='text-4xl'>Bookings</h5>
            </div>
          </Link>
          <Link href="/profile/saved">

            <div className='cursor-pointer w-56  bg-lightred h-32 text-white flex 
        justify-center items-center rounded-lg hover:bg-red-600'>
              <h5 className='text-4xl'>Saved</h5>
            </div>
          </Link>
        </div>
      </div>


    </div>
  )
}

export default Profile
