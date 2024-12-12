import React, {useState,useEffect} from "react";



//create your first component
const Todorandf = () => {

const [todo,setTodo]=useState([])



    function obtenerTodolist(){
        fetch('https://playground.4geeks.com/todo/users/Erick',{
            method:'GET'
        })
        .then(response=>response.json())
        .then((data)=>setTodo(data.todos))
        .catch((error)=>console.log(error))
    }
    
    useEffect(()=>{
        obtenerTodolist()
    },[])
    return (
        <div className="paper">
            <ul>
            {todo.map((item, index) => ( 
                <li key={index}> 
                {item.label} 
                </li> 
            ))}
            </ul>
        </div>
    );
};

export default Todorandf;
