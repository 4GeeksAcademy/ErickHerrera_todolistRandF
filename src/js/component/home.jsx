import React from "react";
import Personajes from "./personajes.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<Personajes />
		</div>
	);
};

export default Home;
