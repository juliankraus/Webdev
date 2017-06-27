/*(() => {
	let FusionCharts = require("fusioncharts");
	require("fusioncharts/fusioncharts.charts")(FusionCharts);

	module.exports.createChart = () => {
		let chart = new FusionCharts({
			type: "area2d",
			width: "500",
			height: "300",
			dataFormat: "json",
			dataSource: {
				chart: {},
				data: [{ value: 500 }, { value: 600 }, { value: 700 }]
			}
		}).render("elevation");
	};

	let chart = new FusionCharts({
		type: "area2d",
		width: "500",
		height: "300",
		dataFormat: "json",
		dataSource: {
			chart: {
				numberPrefix: "$",
				canvasBgAlpha: "0",
				bgColor: "0"
			},
			data: [
				{
					label: "Mon",
					value: "4123"
				},
				{
					label: "Tue",
					value: "4633"
				},
				{
					label: "Wed",
					value: "5507"
				},
				{
					label: "Thu",
					value: "4910"
				},
				{
					label: "Fri",
					value: "5529"
				},
				{
					label: "Sat",
					value: "5803"
				},
				{
					label: "Sun",
					value: "6202"
				}
			]
		}
	}).render("elevation");
})();
*/
