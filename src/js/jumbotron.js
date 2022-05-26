import 'bootstrap/dist/css/bootstrap.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

import React from 'react';


export default function JumbotronExample() {
return (
	<>
	<Jumbotron>
	<h1>Regular, Jumbotron!</h1>
	<p>
		This is a simple Jumbotron example.
	</p>

	<p>
		<Button variant="primary">
		Primary Button
		</Button>
	</p>
	</Jumbotron>
	<br/>
	<Jumbotron fluid>
	<Container>
		<h1>Fluid jumbotron !</h1>
		<p>
		This is a modified fluid jumbotron which
		stretches the whole horizontal space.	
		</p>
		<Button variant="primary">
		Primary Button
		</Button>
	</Container>
	</Jumbotron>
	</>
);
}
