import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from './Navbar.jsx'
import { Card } from './Card.jsx';
import { Jumbotron } from './Jumbotron.jsx';
import { Footer } from './Footer.jsx';

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Card/>
			<Jumbotron/>
			<Footer/>	
		</div>
		
	);
};

export default Home;
