import { useState } from 'react'
import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Register = () => {
  const navigate =useNavigate()
  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  function submitt(e){
    e.preventDefault();
    axios.post('http://localhost:3001/register',{username,email,password})
      .then(resu =>{
        console.log(resu)
        navigate('/login')
      })
      .catch(err=>console.log(err))
  }

  return (
    <>
        <Navbar />
        <div className='grid  place-content-center  '>
            <div className='flex flex-col max-w-4xl  h-[410px] w-[690px] border-4 border-black my-40 shadow-xl' >
              <h1 className='place-self-center font-bold text-3xl'>Register</h1>
              <form className='flex flex-col space-y-3 my-4 mx-4' action="">
                <label className=' font-semibold text-2xl'>Enter your username</label>
                <input type="text" value={username} className='w-60 shadow-lg border-black border-2' onChange={(e)=>setUsername(e.target.value)} placeholder='Enter username..'   />
                <label className=' font-semibold text-2xl'>Enter your Email</label>
                <input type="text" value={email} className='w-60 shadow-lg border-black border-2' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email..'   />
                <label className=' font-semibold text-2xl'>Enter your password</label>
                <input type="text" value={password} className='w-60 shadow-lg border-black border-2' onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter password..'   />
                <button className='border-2 border-black h-12 w-36  font-semibold text-2xl place-self-center' onClick={submitt} >Submit</button>
              </form>
              <a href="/register" className=' text-blue-600 underline mx-4' >Dont have account? Create one</a>
            </div>
        </div>
    </>
  )
}

export default Register