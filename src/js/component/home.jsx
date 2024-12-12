import React, {useState} from "react";
import Todolist from "./todolist";
import Todorandf from "./todoranf";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Todo Usando React and Fetch</h1>
			<Todolist />
			<Todorandf />
			</div>
	);
};

export default Home;
