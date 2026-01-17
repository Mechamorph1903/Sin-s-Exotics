import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";



function Navbar(){
	return(
		<div>
			<div>
				<img src="..\src\assets\logo.jpg" alt="" width="100" height="100" />
			</div>
			<nav>
				<Link>Home</Link>
				<Link>Cars</Link>
				<Link>Contact</Link>
				<Link>Deals</Link>
			</nav>
		</div>
	)
}

export default Navbar;