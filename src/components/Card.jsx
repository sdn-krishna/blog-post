import React from 'react'
import { useState ,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Card = () => {
    const navigate=useNavigate();
    const [cards, setCards] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:3001/profile')
      .then(result =>{console.log(result)
        setCards(result.data)
      } )
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
    });
    
  return (
    <>
      {cards.map((card,index)=>(
        <div key={index} className='border-2 border-black flex flex-row w-[880px] h-[150px]  shadow-lg hover:shadow-2xl hover:cursor-pointer' onClick={()=>navigate("/dashboard/blog/123")}>
        <img src={card.file} alt="imagee" className='w-[280px] h-[135px] mx-1 my-2' />
        <div className='my-[26px]'>
            <h1>Title: <span className='font-bold text-[20px]'>{card.title}</span> </h1>
            <h1>Topic:<span className='font-bold text-[18px]'>{card.topic}</span></h1>
        </div>
    </div>
      ))}
    </>
  )
}

export default Card