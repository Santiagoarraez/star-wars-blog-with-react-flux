import React, { useContext } from "react";
import "../../styles/home.css";
import Characters from "../component/character.jsx";
import Planets from "../component/planets.jsx";


export const Home = () => {
	return (
		<>
		<Characters></Characters>
		<Planets></Planets>
		</>
	)
};
