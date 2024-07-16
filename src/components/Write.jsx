import React, { useState } from 'react'
import NavforD from './NavforD'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Write = () => {
    
    const navigate =useNavigate();
    const [title,setTitle]=useState('');
    const [topic,setTopic]=useState('');
    const [blog,setBlog]=useState('');
    const [file,setFile]=useState('');

    function take(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('topic', topic);
        formData.append('blog', blog);
        formData.append('file', file);

        console.log(file);

        axios.put('http://localhost:3001/create', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(result => {
            console.log(result);
            navigate("/profile");
          })
          .catch(err => {
            console.error('An error occurred:', err.response ? err.response.data : err.message);
          });

    }
    
    return (
    <>
    <div>
        <NavforD />
        <div className='flex flex-col justify-center items-center my-10'>
            <h1 className='font-bold text-5xl'>Create Blog</h1>
            <div >
                <form className='flex flex-col my-10 space-y-2'>
                    <h1 className='font-bold text-[25px]'>Title</h1>
                    <input type="text" className='border-2 border-black w-64 h-8' value={title}  onChange={(e)=>setTitle(e.target.value)} />
                    <h1 className='font-bold text-[25px]'>Topic</h1>
                    <input type="text" className='border-2 border-black w-64 h-8' value={topic}  onChange={(e)=>setTopic(e.target.value)} />
                    <h1 className='font-bold text-[25px]' >Text</h1>
                    <textarea placeholder='Write your blog here' className='border-2 border-black h-20 w-80' value={blog}  onChange={(e)=>setBlog(e.target.value)} />
                    <input type="file" className='border-2 border-black w-[250px] h-8'  onChange={(e)=>setFile(e.target.files[0])} />
                </form>
            </div>
            <button className='border-2 border-black' onClick={take}>Submit</button>
        </div>
    </div>
    </>
  )
}

export default Write