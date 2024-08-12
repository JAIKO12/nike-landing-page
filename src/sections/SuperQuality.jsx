import React from 'react'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
<section id='about-us' className='flex  justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
 <div className='flex flex-1 flex-col '>
 <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
      We Provide You
          <br />
          <span className="text-coral-red">Super</span> 
          <span className="text-coral-red">Quality</span> Shoe
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        "Discover the perfect blend of style, comfort, and durability with Nike's super quality footwear. Engineered for excellence, every pair elevates your performance, ensuring you stand out with every step."
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>"Experience ultimate comfort, durability, and style with Nike's super quality footwear. Elevate your game and every step you take."</p>
        <div className='mt-11 '>
        <Button label="View Details" iconUrl={arrowRight}  />
        </div>
       
 </div>

 <div className='flex flex-1 justify-center items-center'>
  <img src={shoe8} alt=""  width={470} height={522} className='object-contain' />
 </div>
</section>
  )
}

export default SuperQuality