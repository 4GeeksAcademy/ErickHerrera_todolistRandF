import React, {useState,useEffect} from "react";

//create your first component
const Todorandf = () => {

    function obtenerTodolist(){
        fetch('https://playground.4geeks.com/todo/users/Erick',{
            method:'GET'
        })
        .then(response=>response.json)
        .then((data)=>console.log(data)
        .catch(error=>console.log(error))
    )
    }
    
    useEffect(()=>{},[])
    return (
       <div>
        
       </div>
    );
};

export default Todorandf;
