import React from 'react'
import {BsCheck} from 'react-icons/bs'

const Chek = ({isCompleted}) => {
  return (
    <div className={`border-2 rounded-md sm:rounded-lg border-pink-400 ${
        isCompleted ? 'bg-pink-400' :''
        } w-5 h-5 mr-2 flex items-center justify-center sm:w-6 sm:h-6`}
    >
        {isCompleted&&
          <BsCheck size={22} className='text-gray-900'/>}
    </div>
  )
}

export default Chek