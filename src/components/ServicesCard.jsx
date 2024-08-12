import React from 'react'

const ServicesCard = ({ imgURL, label, subtext }) => {
  return (
    <div className=' cursor-pointer flex-1 w-full sm:max-w-[350px] rounded-[20px] shadow-3xl px-6 py-10 sm:px-8 sm:py-12 bg-white transition-transform transform hover:scale-105'>
      <div className='flex w-10 h-10 justify-center items-center bg-coral-red rounded-full'>
        <img src={imgURL} alt="" width={24} height={24} />
      </div>
      <h3 className='mt-4 font-palanquin text-xl sm:text-2xl leading-snug font-bold'>{label}</h3>
      <p className='mt-2 break-words font-montserrat text-sm sm:text-base leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServicesCard
