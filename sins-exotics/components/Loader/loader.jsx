import React from "react"
import "./loader.css"

const Loader = () => {
	return(
		<div className="load-div">
			<div className="logo"><img src="../../src/assets/logo.jpg" alt=""/></div>
			<div className="dot-container">
				<div className="dot1 dot"><img src="../../src/assets/loadcarwhite.svg" alt=""/></div>
				<div className="dot2 dot"><img src="../../src/assets/loadcarwhite.svg" alt=""/></div>
				<div className="dot3 dot"><img src="../../src/assets/loadcarwhite.svg" alt=""/></div>
			</div>
		</div>

	)
}

export default Loader