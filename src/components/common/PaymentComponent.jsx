import React from 'react'
import { Banknote } from 'lucide-react'

const PaymentComponent = ({logo,string}) => {
  return (
    <div className='md:w-[5.2rem] md:h-[4rem] md:bg-gray-200 md:my-2 md:mx-2 md:flex md:flex-col md:items-center md:justify-center md:rounded-lg 
    md:text-lg md:font-semibold'>
{logo}
<p>{string}</p>
</div>
  )
}

export default PaymentComponent