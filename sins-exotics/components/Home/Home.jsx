import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

function Home(){
	return(
		<div>
			<div className="intro">
				<h1>Welcome to Sin's Exotics Car Rentals</h1>
				<p>
					Experience elite service with a fleet that spans from high-end economy to world-class exotics.
					Also featuring Luxury Chauffeur Services and seamless delivery, we provide the perfect ride for every occasion.
				</p>

				<div className="rules">
					<h1>Rules</h1>
					<div className="rule-cards">
						<div className="card1">
							<h3>Rule #1</h3>
							<p className="rule-text">
								<div className="rule-heading">
									<strong>Follow all Traffic Rules and Regulations</strong>
								</div>
								<hr />
								Renting the vehicle means any type of tickets or tolls
								you get while the car is and was in your
								possession will be at <span className="warning">your expense</span>.
							</p>
						</div>
						<div className="card2">
							<h3>Rule #2</h3>
							<p className="rule-text">
								<div className="rule-heading">
									<strong>Keep the Car in the same condition
								that you received it!</strong>
								</div>
								<hr />
								Before you bring the car back, make
								sure it's <strong>clean</strong> and <strong>neat</strong>.
								Any <strong>damages</strong> to the vehicle inside and
								out will be <span className="warning">your responsibility</span>.
							</p>
						</div>
						<div className="card3">
							<h3>Rule #3</h3>
							<p className="rule-text">
								<div className="rule-heading">
									<strong>If I give you the keys, YOU are the person
								responsible for the car.</strong>
								</div>
								<hr /> 
								Do not give the car to anyone else because I will
								not not hold anyone but <span className="warning">YOU </span>
								accountable!!!!
							</p>
						</div>
						<div className="card4">
							<h3>Rule #4</h3>
							<p className="rule-text">
								<div className="rule-heading">
									<strong>RESPECT TIME.</strong>
								</div>
								<hr />
								Every Driver has a 30 min Grace period
								to bring back the vehicle,
								after that you will be charged a <span className="warning">late</span> fee.
							</p>
						</div>
						<div className="card5">
							<h3>Rule #5</h3>
							<p className="rule-text">
								<div className="rule-heading">
									<strong className="rule-heading">Driver Eligibility Requirement: 
								Valid Driver's License and Proof of
								Active Insurance Coverage REQUIRED!</strong>
								</div>
								<hr />
								At Sin's Exotic Car Rental, your safety and compliance come first. 
								You must present a <strong><i><span className="warning">valid</span></i></strong> driver's license and proof of <strong><i><span className="warning">active</span></i></strong> insurance before taking the wheel of any vehicle in our
								fleet. This policy ensures a smooth and secure rental experience for
								everyone.
							</p>
						</div>
					</div>
				</div>

				<div className="cars">
					<h1>Our Most Popular Options</h1>
					<div className="pics">
						{/* These are going to be links */}
					<img src="/src/assets/gwag1.png" alt="" className="car-pics" />
					<img src="/src/assets/25m11.png" alt="" className="car-pics" />
					<img src="/src/assets/urusperformante1.png" alt="" className="car-pics" />
					</div>
					<Link to="/cars">Check out our Full Collection!</Link>
				</div>

				<div className="footer">
					<p>@AnorueJr</p>
				</div>
			</div>
		</div>
	)
}

export default Home;