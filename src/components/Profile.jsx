import React from 'react'
import NavforD from './NavforD'

const Profile = () => {
  


  return (
    <>
        <NavforD />
        <div className='flex flex-row'>
            <div className='flex flex-col'>
              <a href="/">Logout</a>
              <a href="/login">Sign in to another account</a>
            </div>

            <div>
                
            </div>
        </div>
    </>
  )
}

export default Profile