import React from 'react'
import { useState } from "react";

const TodoInput = ({setTodos}) => {
  const[title,setTitle]=useState('')  
  
  const addTodo=title=>{
    setTodos(prev=>[
        {
            _id:new Date(),
            title,
            isCompleted:false
        },
        ...prev,
    ])
    setTitle('')
   }

  return (
    <div className='flex items-center mb-10 text-lп rounded-lg border-slate-900 border-2 background-dark px-5 py-3 w-full sm:text-2xl'>
        <input type="text" 
        onChange={e=>setTitle(e.target.value)}
        value={title}
        onKeyPress={e=>e.key==='Enter' && addTodo(title)}
        className='bg-transparent w-full border-none outline-none'
        placeholder='What to do ?'
        />

    </div>
  )
}

export default TodoInput