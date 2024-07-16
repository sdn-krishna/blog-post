import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='text-black font-bold text-3xl border-4 h-12 border-none shadow-xl'>
            <div className='flex flex-row justify-between '>
                <a href="/">BlogGram</a>
                <div className='  flex flex-row space-x-16 '>
                    <a href="/login" className='hover:underline'>Login</a>
                    <a href="/register" className='hover:underline'>Register</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar