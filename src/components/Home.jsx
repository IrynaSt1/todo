import React from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput"
import { useState } from "react";

const data=[
    {
        _id:"jdnk1",
        title:'Task',
        isCompleted:false,
    },
    {
        _id:"jkgn8",
        title:'Task',
        isCompleted:false,
    },
    {
        _id:"ngvjkdr8",
        title:'Task',
        isCompleted:false,
    },
]
const Home = () => {
    const [todos,setTodos]=useState(data)

    const changeTodo= id =>{
        const copy=[...todos]
        const current=copy.find(t=>t._id===id)
        current.isCompleted=!current.isCompleted
        setTodos(copy)

    }

    const removeTodo= id =>{
        setTodos([...todos].filter(t=>t._id!==id))

    }

    console.log(todos)
    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="font-bold text-center text-2xl mb-8 sm:text-3xl">Todo list</h1>
            <TodoInput setTodos={setTodos}/>
            {todos.map(todo=>(
            <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}/>
            ))}
            
        </div>
    )
}

export default Home