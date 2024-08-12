import React from 'react'
import { reviews } from '../constant'
import ReviewsCard from '../components/ReviewsCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-semibold'>What Our
        <span className='text-coral-red'>Customers </span> Says
      </h3>
      <p className='info-text mt-4  m-auto max-w-lg text-center'>Hear directly from our satisfied customers and see how Nike has made a difference in their lives.</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review)=>(
          <ReviewsCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating = {review.rating} feedback={review.feedback }/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews