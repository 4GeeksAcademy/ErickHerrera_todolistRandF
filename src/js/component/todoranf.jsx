import React, { useState, useEffect } from "react";

//create your first component
const Todorandf = () => {
  const [todo, setTodo] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  // Obtener las tareas del usuario
  function obtenerTodolist() {
    fetch("https://playground.4geeks.com/todo/users/Erick", {
      method: "GET",
    })
      .then((response) => {
        if (response.status === 404) {
          crearUsuario(); // Si no existe, crea el usuario
        }
        return response.json();
      })
      .then((data) => {
        if (data.todos) {
          setTodo(data.todos);
        }
      })
      .catch((error) => console.log(error));
  }

  // Crear el usuario si no existe
  function crearUsuario() {
    fetch("https://playground.4geeks.com/todo/users/Erick", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([]), // La API espera un arreglo vacío para inicializar la lista de tareas
    })
      .then((response) => {
        if (response.ok) {
          console.log("Usuario creado exitosamente");
          obtenerTodolist(); // Llama de nuevo a la función para obtener los datos actualizados
        } else {
          console.log("Error al crear el usuario");
        }
      })
      .catch((error) => console.log(error));
  }

  // Añadir una nueva tarea
  function añadirTarea() {
    if (nuevaTarea.trim() === "") {
      console.log("La tarea no puede estar vacía");
      return;
    }

    const nuevaTareaObj = { label: nuevaTarea, is_done: false };

    fetch("https://playground.4geeks.com/todo/todos/Erick", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaTareaObj),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Tarea añadida exitosamente");
          obtenerTodolist(); // Actualiza la lista de tareas después de agregar una nueva
          setNuevaTarea(""); // Limpia el input
        } else {
          response.json().then((data) => console.log("Error:", data));
        }
      })
      .catch((error) => console.log(error));
  }

  // Eliminar tarea por id
  const eliminarTarea = (id) => {
    fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setTodo(todo.filter((item) => item.id !== id)); // Filtra la tarea eliminada del estado
          console.log("Tarea eliminada con éxito");
        } else {
          console.log("Error al eliminar la tarea");
        }
      })
      .catch((error) => console.log(error));
  };

  // Eliminar todas las tareas y el usuario
  const eliminarUsuarioYRecrear = () => {
    fetch("https://playground.4geeks.com/todo/users/Erick", {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Usuario eliminado con éxito, recreando...");
          crearUsuario(); // Vuelve a crear al usuario con una lista vacía de tareas
        } else {
          console.log("Error al eliminar el usuario");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    obtenerTodolist();
  }, []);

  return (
    <div className="paper">
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.label}
            <button
              className="delete-button"
              onClick={() => eliminarTarea(item.id)} // Eliminar tarea al hacer clic
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe una nueva tarea"
      />
      <button className="add-task-button" onClick={añadirTarea}>Añadir Tarea</button >
      <button onClick={eliminarUsuarioYRecrear} className="delete-all">
        Borrar todas las tareas
      </button>
    </div>
  );
};

export default Todorandf;