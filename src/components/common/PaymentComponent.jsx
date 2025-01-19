import React from 'react'
import { Banknote } from 'lucide-react'

const PaymentComponent = ({logo,string}) => {
  return (
    <div className='md:w-[6rem] md:h-[5rem] md:bg-gray-200 md:my-4 md:mx-4 md:flex md:flex-col md:items-center md:justify-center md:rounded-lg 
    md:text-xl md:font-semibold'>
{logo}
<p>{string}</p>
</div>
  )
}

export default PaymentComponent