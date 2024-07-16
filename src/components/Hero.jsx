import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate =useNavigate()
  return (
    <div>
        <Navbar />
        <div className='absolute my-16'>
            <div className='flex flex-col '>
                <h1 className='text-7xl font-semibold'>Welcome.</h1>
                <p className='text-[30px]' >The place where you can read & write the wonders all over the world just at your fingertips. <br /> Sitback and relax!! </p>
                <div className=' flex s my-40 justify-center'>
                    <div className='flex flex-col'>
                    <button className='border-4 border-black h-12 w-36  font-semibold text-2xl hover:bg-gray-300' onClick={()=>navigate("/login")} >Login</button>
                    <button className='border-4 border-black my-5 h-12 w-36  font-semibold text-2xl hover:bg-gray-300' onClick={()=>navigate("/register")} >Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero