import React, {useState} from "react";

//create your first component
const Todolist = () => {

    function obtenerTodolist(){
        
    }


    //let nuevoTodo="Tarea ejemplo";
    const [nuevoTodo,setNuevoTodo]=useState("Tarea ejemplo");
    const [todos,setTodos]=useState(["Primera tarea de prueba","segunda tarea de prueba","tercera tarea de prueba"]);


    const handleClick=()=>{
        console.log("Nueva tarea: ",nuevoTodo)
        setTodos([...todos,nuevoTodo])
    }

    const deteleTask=(indice)=>{
        console.log(indice)
        const listaNueva=todos.filter((todos,i)=>i!==indice)
        setTodos(listaNueva)
    }
    
    const handleChange=(event)=>{
        console.log(event.target.value)
        setNuevoTodo(event.target.value)
    }
    return (
        <div className="text-center">
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>
                Agregar Tarea
            </button>
            <p>Nueva tarea: {nuevoTodo}</p>
            <div className="paper">
            <ul>
                {todos.map((todo,indice)=>{
                    return(
                        <li
                        key={indice}
                        className="todo-item"
                        onMouseEnter={(e) => e.currentTarget.classList.add("show-delete")}
                        onMouseLeave={(e) => e.currentTarget.classList.remove("show-delete")}>
                        <span style={{ flex: 1 }}>{todo}</span>
                        <button onClick={() =>deteleTask(indice)} className="delete-button">
                        ❌
                        </button>
                        </li>
                    )
                })}
            </ul>
            </div>
        </div>
    );
};

export default Todolist;
