import React from 'react'
import NavforD from './NavforD'
import Card from './Card'

const Dashboard = () => {
  return (
    <>
    <NavforD />
    <div>
        <div className='flex flex-col justify-center items-center my-5 space-y-3'>
            <Card/>
        </div>
    </div>
    </>
  )
}

export default Dashboard