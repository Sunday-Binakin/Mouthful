import React from 'react'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import OrderComponent from '../components/layout/OrderComponent'
import VerticalDividerComponent from '../components/common/VerticalDividerComponent'


const Order = () => {
  return (
    <>
        <Navbar/>
        <hr />
        <div className='md:flex'>
        <Sidebar/>
        <VerticalDividerComponent height={'80vh'}/>
        <OrderComponent/>
        </div>
    </>
  )
}

export default Order