import React from 'react'

const TipComponent = ({amount}) => {
    return (
        <div className='md:w-[5rem] md:h-[4rem] md:bg-gray-200 md:flex md:items-center md:justify-center md:rounded-lg'>
            <p> <span className='md:-mt-2 md:text-xl md:text-center'>₵</span>  <span className='text-2xl'>{amount}</span></p>
        </div>
    )
}

export default TipComponent