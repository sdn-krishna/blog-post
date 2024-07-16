import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  
  const navigate =useNavigate()
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  
  function submitt(e){
    e.preventDefault();
    axios.post('http://localhost:3001/login',{username,password})
      .then(result=>{console.log(result)
        if(result.data==='approve')
          navigate('/dashboard')
        else if (result.data==='wrong creds')
          alert("Wrong credentials.")
        else
          alert("User does not exists")
      })
  }
  
  return (
    <>
        <Navbar />
        <div className='grid  place-content-center  '>
            <div className='flex flex-col max-w-4xl h-[340px] w-[640px] border-4 border-black my-40 shadow-xl' >
              <h1 className='place-self-center font-bold text-3xl'>Login</h1>
              <form className='flex flex-col space-y-3 my-4 mx-4' action="">
                <label className=' font-semibold text-2xl'>Enter your username</label>
                <input type="text" value={username} className='w-60 shadow-lg border-black border-2' placeholder='Enter username..' onChange={(e)=>setUsername(e.target.value)}  />
                <label className=' font-semibold text-2xl'>Enter your password</label>
                <input type="text" value={password} className='w-60 shadow-lg border-black border-2' placeholder='Enter password..'  onChange={(e)=>setPassword(e.target.value)}  />
                <button className='border-2 border-black h-12 w-36  font-semibold text-2xl place-self-center' onClick={submitt} >Submit</button>
              </form>
              <a href="/register" className=' text-blue-600 underline mx-4' >Dont have account? Create one</a>
            </div>
        </div>
    </>
  )
}

export default Login