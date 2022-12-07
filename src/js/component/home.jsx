import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbatron";
import Cards from ".cads.js";


//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<Jumbotron/>
		<Cards/>
		</>
	);
};

export default Home;
