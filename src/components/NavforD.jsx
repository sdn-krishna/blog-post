import React from 'react'

const NavforD = () => {
  return (
    <>
        <div className='text-black font-bold text-3xl border-4 h-12 border-none shadow-xl'>
            <div className='flex flex-row justify-between '>
                <a href="/dashboard">BlogGram</a>
                <div className='  flex flex-row space-x-16 '>
                    <a href="/create" className='hover:underline'>Create</a>
                    <a href="/profile" className='hover:underline'>Profile</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavforD