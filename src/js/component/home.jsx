import React, { useState } from "react";
import Bulb from "./bulb.jsx";

const Home = () => {
	const [color, setColor] = useState({
		stop: "empty",
		ready: "empty",
		run: "empty"
	});

	return (
		<div>
			

				<div className="pole-bar"></div>
			<div className="container">
				<Bulb
					light={color.stop}
					switchLight={() => {
						setColor({
							stop: "red",
							ready: "empty",
							run: "empty"
						});
					}}
				/>
				<Bulb
					light={color.ready}
					switchLight={() => {
						setColor({
							stop: "empty",
							ready: "yellow",
							run: "empty"
						});
					}}
				/>
				<Bulb
					light={color.run}
					switchLight={() => {
						setColor({
							stop: "empty",
							ready: "empty",
							run: "green"
						});
					}}
				/>
			</div>
		</div>
	);
};

export default Home;
