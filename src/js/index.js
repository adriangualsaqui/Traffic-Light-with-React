//Import REACT
//import React from "react";
import ReactDOM from "react-dom";
import React, { useState } from "react";

//Import BOOTSTRAP
import "bootstrap";

//Styles
//import "../styles/index.scss";
import "../styles/trafficlight.css";
//Components
//import TrafficLight from "./component/TrafficLight.js";
const TrafficLight = () => {
	//Define the hooks to be used in the function
	const [lightColor, setLightColor] = useState("red");

	return (
		<div className="container">
			<div className="stick">
				<div className="traffic">
					<div
						onClick={() => setLightColor("red")}
						className={
							"light red " + (lightColor == "red" ? "glow" : "")
						}></div>
					<div
						onClick={() => setLightColor("yellow")}
						className={
							"light yellow " +
							(lightColor == "yellow" ? "glow" : "")
						}></div>
					<div
						onClick={() => setLightColor("green")}
						className={
							"light green " +
							(lightColor == "green" ? "glow" : "")
						}></div>
				</div>
			</div>
		</div>
	);
};

//Render application, to verify that the light shines when any of the traffic light colors are clicked
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
