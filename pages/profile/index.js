import { Edit } from '@components/Icons'
import { user_data } from 'data/user-dummy'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useRouter } from 'next/router';

const Profile = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  console.log(user);
  const [loadedUser, setLoadedUser] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [nameField, setNameField] = useState(null);
  const [contactField, setContactField] = useState(null);
  const [addressField, setAddressField] = useState(null);
  const [emailField, setEmailField] = useState(null);
  useEffect(() => {
    if (user) {
      var config = {
        method: 'get',
        url: `/user/verify/${user.nickname}`,
        headers: {}
      };
      axios(config)
        .then(function (response) {
          console.log((response.data));
          setLoadedUser(response.data);
          setNameField(response.data.user_name);
          setContactField(response.data.contact_no);
          setAddressField(response.data.address);
          setEmailField(response.data.email)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [user])

  function submitChangesHandler() {
    var data = JSON.stringify({
      "user_name": nameField,
      "contact_no": contactField,
      "address": addressField,
      "user_id": loadedUser._id,
      "email": emailField
    });

    var config = {
      method: 'patch',
      url: '/user/details',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log((response.data));
        router.reload()
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div className='px-20 '>
      {loadedUser && (
        <>
          <div className='flex flex-col items-center'>
            <div className='w-full text-center text-5xl  flex gap-2 justify-center mt-5'>
              <h1 className=''>Welcome,</h1>
              <p className='text-lightred'>{loadedUser.user_name}</p>
            </div>
            <div className='w-max text-center underline mt-3 hover:text-lightred'>
              <a href="/api/auth/logout">Logout</a>
            </div>
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
                {!editMode && <p>{contactField === 0 ? "None set" : contactField}</p>}
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
                  onClick={submitChangesHandler}
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
        </>
      )}
    </div>
  )
}

export default Profile
