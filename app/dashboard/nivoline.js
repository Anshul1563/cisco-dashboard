"use client";

import { ResponsiveLine } from "@nivo/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data }) => (
	<ResponsiveLine
		data={data}
		curve="monotoneX"
		margin={{ top: 50, right: 150, bottom: 100, left: 150 }}
		xScale={{
			type: "time",
			format: "%d-%m-%Y",
			// useUTC: false,
			// precision: "day",
		}}
		xFormat="time:%d-%m-%Y"
		yScale={{
			type: "linear",
			min: "auto",
			max: "auto",
			stacked: true,
			reverse: false,
		}}
		yFormat=" >-.2f"
		axisTop={null}
		axisRight={null}
		axisBottom={{
			tickValues: "every 1 month",
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			format: "%d-%m-%Y",
			legend: "Date",
			legendOffset: 80,
			legendPosition: "middle",
			tickRotation: 90,
		}}
		axisLeft={{
			orient: "left",
			tickSize: 5,
			tickPadding: 5,
			legend: "Booking Quantity",
			tickRotation: 0,
			legendOffset: -60,
			legendPosition: "middle",
		}}
		pointSize={10}
		pointColor={{ theme: "background" }}
		pointBorderWidth={2}
		pointBorderColor={{ from: "serieColor" }}
		pointLabelYOffset={-12}
		useMesh={true}
		legends={[
			{
				anchor: "bottom-right",
				direction: "column",
				justify: false,
				translateX: 100,
				translateY: 0,
				itemsSpacing: 0,
				itemDirection: "left-to-right",
				itemWidth: 80,
				itemHeight: 20,
				itemOpacity: 0.75,
				symbolSize: 12,
				symbolShape: "circle",
				symbolBorderColor: "rgba(0, 0, 0, .5)",
				effects: [
					{
						on: "hover",
						style: {
							itemBackground: "rgba(0, 0, 0, .03)",
							itemOpacity: 1,
						},
					},
				],
			},
		]}
	/>
);

function Line({ data }) {
	return <MyResponsiveLine data={data} />;
}

export default Line;
