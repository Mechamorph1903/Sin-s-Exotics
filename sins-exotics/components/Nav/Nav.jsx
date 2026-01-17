import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";



function Navbar(){
	return(
		<div className="bar">
			<div>
				<img src="/src/assets/logo.jpg" alt="" width="100" height="100" />
			</div>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/cars">Cars</Link>
				<Link to="/contact">Contact</Link>
			</nav>
		</div>
	)
}

export default Navbar;