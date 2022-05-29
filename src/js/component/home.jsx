import React from "react";
import { Cards } from "./card";
import { JumbotronExample } from "./jumbotron";
import { Navbar } from "./navbar";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<JumbotronExample />
			<Cards />
		</div>
	);
};

export default Home;
