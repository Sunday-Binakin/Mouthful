import React from 'react'
import { Banknote, CreditCard, Ticket, Trash } from 'lucide-react';
import DottedDividerComponent from '../common/DottedDividerComponent';
import TipComponent from '../common/TipComponent';
import PaymentComponent from '../common/PaymentComponent';



const OrderComponent = () => {
    return (
        <div className='md:flex '>
            <div className='md:w-[54%] md:mr-[5%] '>
            <div className='md:mb-24 md:text-4xl md:flex jmd:ustify-start md:mt-2'>
            <h1>ORDER # <span>12345678</span></h1>
            </div>
                <div className=''>
                    <table className="md:table-fixed md:w-full">
                        <thead className="md:bg-gray-200">
                            <tr>
                                <th className="md:w-[40%] md:text-left md:px-4 py-2">ITEM</th>
                                <th className="md:w-[20%] md:text-center md:px-4 md:py-2">PRICE</th>
                                <th className="w-[20%] md:text-center md:px-4 md:py-2">QTY</th>
                                <th className="md:w-[20%] md:text-center md:px-4 md:py-2">SUBTOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-100">
                                <td className="md:px-4 md:py-2">CHICKEN WINGS</td>
                                <td className="md:text-center md:px-4 md:py-2">₵35.00</td>
                                <td className="md:text-center md:px-4 md:py-2">2</td>
                                <td className="md:text-center md:px-4 md:py-2 md:flex items-center justify-center gap-2">
                                    ₵70.00
                                    <Trash color="red" size={20} className="cursor-pointer" />
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="px-4 py-2">SUMMER SALAD</td>
                                <td className="text-center px-4 py-2">₵50.00</td>
                                <td className="text-center px-4 py-2">1</td>
                                <td className="text-center px-4 py-2 flex items-center justify-center gap-2">
                                    ₵50.00
                                    <Trash color="red" size={20} className="cursor-pointer" />
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="px-4 py-2">FRENCH FRIES</td>
                                <td className="text-center px-4 py-2">₵25.00</td>
                                <td className="text-center px-4 py-2">3</td>
                                <td className="text-center px-4 py-2 flex items-center justify-center gap-2">
                                    ₵75.00
                                    <Trash color="red" size={20} className="cursor-pointer" />
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
                <div className=''>
                    <button className='md:bg-red-400 md:w-[100%] md:h-[5rem] md:font-semibold md:text-2xl  md:mt-[13rem] md:-mr-6 md:rounded-lg'>
                        CANCEL ORDER
                    </button>
                </div>
            </div>
            <div className='md:w-[40%] md:flex md:flex-col md:h-[84vh]'>
                <div className='md:flex md:flex-col md:h-[10%] md:mx-6  md:mb-2  md:text-3xl md:gap-2 md:font-semibold'>
                    <p>PAYABLE AMOUNT</p>
                    <p className='md:text-[rgb(215,159,100)]'>GHC 38.5</p>
                </div>
                <DottedDividerComponent />
                <div className='md:flex md:flex-col md:h-[15%]  '>
                    <div className='md:flex md:gap-2 md:justify-around md:mt-1 md:mx-4 md:text-lg md:font-semibold'>
                        <p className='md:mt-4'>ADD TIP</p>
                        <TipComponent amount={5} />
                        <TipComponent amount={10} />
                        <TipComponent amount={15} />
                        <TipComponent amount={20} />
                    </div>
                    <DottedDividerComponent />
                </div>
                <div className='md:flex md:justify-around md:mb-6 md:h-[10%]   '>

                    <PaymentComponent logo={<Banknote />} string={'CASH'} />
                    <PaymentComponent logo={<CreditCard />} string={'CARD'} />
                    <PaymentComponent logo={<Ticket />} string={'VOUCHER'} />

                </div>
                {/* <DottedDividerComponent /> */}
                <div className='md:flex md:flex-col md:h-[15%] md:bg-gray-200 md:border-dotted md:border-b md:border-t md:border-gray-400'>
                    <div className='md:flex md:justify-around md:text-3xl md:mt-4 '>
                        <p>ADD CASH RECIEVED</p>
                        <div className='md:flex md:flex-col'>
                            <p className='md:text-5xl'>₵45</p>
                            <hr className='md:w-full md:my-2 md:border-2 md:border-black md:mt-2'></hr>
                        </div>
                    </div>
                </div>
                {/* <DottedDividerComponent/> */}
                <div className="md:flex md:flex-col md:h-[20%] md:space-y-2">
                    <div className="md:mx-4 md:flex md:justify-between">
                        <p>SUBTOTAL</p>
                        <p>₵35.00</p>
                    </div>
                    <div className="md:mx-4 md:flex md:justify-between">
                        <p>TIPS</p>
                        <p>₵5.00</p>
                    </div>
                    <div className="md:mx-4 md:flex md:justify-between">
                        <p>SERVICE CHARGE 10%</p>
                        <p>₵3.50</p>
                    </div>
                </div>

                <div className="md:flex md:flex-col md:h-[20%]   md:px-4 md:py-2">
                    <div className="md:flex md:justify-between md:text-4xl md:font-bold p-2">
                        <p>TOTAL</p>
                        <p>₵43.50</p>
                    </div>


                </div>
                <div className='md:flex md:flex-col   '>
                    <button className='md:bg-[rgb(139,182,191)]  md:h-20 md:text-4xl rounded-lg'>PAY NOW</button>
                </div>

            </div>
        </div>
    )
}

export default OrderComponent