import React from 'react'
import { Calendar, Search } from 'lucide-react';


const Navbar = () => {
    return (
        <div className='md:flex md:justify-around md:gap-8 md:my-6 md:mx-2'>
            <div className='md:flex  md:gap-[200px]'>
                <h1 className='md:font-extrabold md:mt-2 md:-ml-60 text-[#B1CED4]'>MOUTHFULL</h1>

                <div className=" ">
                    <div className="relative">
                        <div className="relative">
                            <Search className="absolute  right-2 top-1/2 text-gray-400 transform -translate-y-1/2" />
                            <input type="text" placeholder="Search Product or any order"
                                className="border-1 border-gray-300 bg-[#EBF3F5] md:w-[350px] h-12 px-5 rounded-lg text-md" />
                        </div>
                    </div>

                </div>
            </div>

            <p className='md:flex md:gap-1 md:-mr-[18rem]'><Calendar />{new Date().toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' })}  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
        </div>
    )
}

export default Navbar