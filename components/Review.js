import moment from 'moment';
import React from 'react'
import Avatar from 'react-avatar';
const Review = ({ review }) => {
  console.log(review);
  return (
    <div className='p-4 border border-lightred max-h-xl w-4/12 relative'>
      <div className='flex gap-2'>
        <Avatar name={review.user_name} size={50} />
        <div>
          <p className='font-semibold text-lg'>{review.user_name}</p>
          <p className='text-gray-700 text-sm'>{moment(review.date).format('MMMM Do YYYY')}</p>
        </div>
      </div>
      <div className='mt-3' >
        <h5 className='text-xl font-semibold'>{review.review_title}</h5>
        <div className='mt-1'>
          <p>{review.review_text}</p>
        </div>
      </div>
      <div>
        <div className='absolute right-5 top-5'>
          <div className='p-2 bg-lightred rounded-lg w-10 text-center'>{review.rating}</div>
        </div>
      </div>
    </div>
  )
}

export default Review
