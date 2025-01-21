import React from 'react'

const TipComponent = ({amount}) => {
    return (
        <div className='md:w-[4rem] md:h-[3rem] md:bg-gray-200 md:flex md:items-center md:justify-center md:rounded-lg'>
            <p> <span className='md:-mt-2 md:text-lg md:text-center'>₵</span>  <span className='text-2xl'>{amount}</span></p>
        </div>
    )
}

export default TipComponent