import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from '../../src/lib/supabaseClient';
import carImg from '../../src/assets/25m11.png';
import './Cars.css';
import Loader from "../Loader/loader";



function Cars(){
	const [vehicles, setVehicles] = useState([]);
	const [loading, setLoading] = useState(true);

	const getData = async () => {
		setLoading(true);
		try {
			const { data, error } = await supabase.from("Cars").select('*');
			if(error) throw error;
			setVehicles(data || []);
		} catch (error) {
			console.error('Fetch error:', e);
		} finally{
			setLoading(false);
		}
		};

	useEffect(() => {
		getData();
		
	}, [])

	
	
	return(
		<div className="cars-root">
			{loading && <Loader/>}

			<div className="search_bar">

			</div>
			<h1>Available</h1>

			<div className="carDisplay">
				{vehicles.map((car) => (
					<div className="carCard" key={car.car_id}>
						<img src={carImg} alt="" />
						<p>{car.car_model}</p>
					</div>
				))}
				
			</div>
		</div>
	)
}

export default Cars;