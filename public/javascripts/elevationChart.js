import React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";

module.exports.init = (json) => {
	let axis = ["x", "y"];
	let array = [];
	let counter = 0;

	array.push(axis);

	// get elevation coordinates from clicked object (x and y coordinates)
	json.features[0].geometry.coordinates.forEach((coordinates) => {
		array[counter + 1] = [counter, coordinates[2]];
		counter++;
	});

	class App extends React.Component {
		render() {
			return (
				<div className={"my-pretty-chart-container"}>
					<Chart
						chartType="AreaChart"
						data={array}
						options={{
							legend: "none",
							backgroundColor: "transparent",
							chartArea: { width: "100%", height: "100%" },
							vAxis: { gridlines: { count: 0 }, baselineColor: "transparent" },
							hAxis: { gridlines: { count: 0 }, baselineColor: "transparent" },
							colors: ["black"]
						}}
						graph_id="AreaChart"
						legend_toggle
					/>
				</div>
			);
		}
	}

	render(<App />, document.getElementById("elevation"));
};
