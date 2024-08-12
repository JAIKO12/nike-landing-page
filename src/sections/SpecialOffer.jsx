import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} className='object-contain w-full' alt="" />
      </div>
      <div className='flex flex-1 flex-col '>
 <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
     Special  <span className='text-coral-red'>Offer</span> 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        "Discover the perfect blend of style, comfort, and durability with Nike's super quality footwear. Engineered for excellence, every pair elevates your performance, ensuring you stand out with every step."
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>"Experience ultimate comfort, durability, and style with Nike's super quality footwear. Elevate your game and every step you take."</p>
        <div className='mt-11  flex flex-wrap gap-4'>
        <Button label="Shop Now" iconUrl={arrowRight}  />
        <Button label="Learn More" backgroundColor="bg-white" border="border-slate-500" textColor="text-color-gray"/>
        </div>
       
 </div>
    </section>
  )
}

export default SpecialOffer