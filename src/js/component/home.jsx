import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
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
			<h1 className="text-center mt-5">Todo Usando React and Fetch</h1>
			<input type="text" onChange={handleChange}/>
			<button onClick={handleClick}>
				Agregar Tarea
			</button>
			<p>Nueva tarea: {nuevoTodo}</p>
			<ul>
				{todos.map((todo,indice)=>{
					return(
						<li>
							{todo}<button onClick={()=>deteleTask(indice)}>Borrar</button>
						</li>
					)
				})}
			</ul>
		</div>
	);
};

export default Home;
