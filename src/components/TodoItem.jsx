import React from 'react'
import Chek from './Chek'
import {RxCross2} from 'react-icons/rx'
const TodoItem = ({todo,changeTodo,removeTodo}) => {
  return (
    
    <div 
      className='flex justify-between items-center mb-4 rounded-lg text-lg background-dark drop-shadow-xl p-4 w-full sm:text-2xl sm:p-5'
      >

      <button className='flex items-center' onClick={()=>changeTodo(todo._id)}>
        <Chek isCompleted={todo.isCompleted}/>
        <span className={`${
          todo.isCompleted ? 'line-through' :''
          }`}>{todo.title}
        </span>
      </button>
      <button onClick={()=>removeTodo(todo._id)}>
        <RxCross2 className="text-gray-500 hover:text-pink-400 transition-colors ease-in-out duration-300" />
      </button>
    </div>
    
  )
} 

export default TodoItem