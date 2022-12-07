import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbatron";
import Footer from ".footer";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<Jumbotron/>
		<Footer/>
		</>
	);
};

export default Home;
