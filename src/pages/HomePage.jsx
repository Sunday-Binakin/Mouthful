import React from 'react'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import HomeComponent from '../components/HomeComponent'

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <hr />
        <div className='md:flex'>
        <Sidebar/>
        <div className='md:h-[87vh] md:w-[0.1px] md:mx-4 md:border-r md:border md:border-gray'></div>
        <HomeComponent/>
        </div>
    </>
  )
}

export default HomePage