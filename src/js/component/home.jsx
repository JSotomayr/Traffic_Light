import React, { Fragment, useState } from "react";
import TrafficLight from "./trafficLight.jsx";

const Home = () => {
	const [color, setColor] = useState({
		stop: "red",
		slow: "yellow",
		go: "green"
	});
	return (
		<div className="container">
			<div className="TrafficBox">
				
				<TrafficLight
					light={color.stop}
					addglow={() => {
						setColor({
							stop: "red glow",
							slow: "yellow",
							go: "green"
						});
					}}
				/>

				<TrafficLight
					light={color.slow}
					addglow={() => {
						setColor({
							stop: "red",
							slow: "yellow glow",
							go: "green"
						});
					}}
				/>

				<TrafficLight
					light={color.go}
					addglow={() => {
						setColor({
							stop: "red",
							slow: "yellow ",
							go: "green glow"
						});
					}}
				/>
			</div>
		</div>
	);
};

export default Home;
