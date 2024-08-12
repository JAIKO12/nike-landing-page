import React from 'react'

const Button = ({label,iconUrl,backgroundColor, textColor, borderColor}) => {
  return (
    <button className={`flex justify-center items-center px-7 py-4 border font-montserrat text-lg leading-none  bg-coral-red 
    ${backgroundColor ? `border ${backgroundColor} ${textColor} ${borderColor}`: "bg-coral-red rounded-full text-white"} rounded-full `}>
        {label}
        {iconUrl && <img src={iconUrl} alt="" className='ml-2 rounded-full w-5 h-5' />}
    </button>
  )
}

export default Button