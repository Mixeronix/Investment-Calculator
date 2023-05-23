"use client";

import Chart from "chart.js/auto";
import { useEffect } from "react";

export default function Graph(props: { starting: number; monthly: number; interest: Array<Number> }) {
	useEffect(() => {
		const ctx: any = document.getElementById("myChart");

		const width = window.innerWidth;

		const len = props.interest.length;

		new Chart(ctx, {
			data: {
				labels: Array.from({ length: len }, (_, i) => "Year " + (i + 1)),
				datasets: [
					{
						type: "line",

						label: "Total Contributions",
						data: Array.from({ length: len }, (_, i) => props.starting + (i + 1) * props.monthly),
						fill: false,
						borderColor: "rgb(255, 255 ,255 )",
						tension: 0.2,
					},
					{
						type: "line",

						label: "Total Interest Earned",
						data: Array.from({ length: len }, (_, i) => props.interest[i]),
						fill: false,
						borderColor: "rgb(124, 58 ,237 )",
						tension: 0.2,
					},
					{
						type: "bar",

						label: "Total Contributions",
						data: Array.from({ length: len }, (_, i) => props.starting + (i + 1) * props.monthly),
						// fill: false,
						backgroundColor: "rgb(255, 255 ,255 , 0.2)",
						// tension: 0.2,
					},
					{
						type: "bar",

						label: "Total Interest Earned",
						data: Array.from({ length: len }, (_, i) => props.interest[i]),
						// fill: false,
						backgroundColor: "rgb(124, 58 ,237 , 0.2)",
						// tension: 0.2,
					},
				],
			},
			options: {
				aspectRatio: width >= 1024 ? 2 : 1,
				scales: {
					y: {
						stacked: true,
						beginAtZero: true,
						ticks: {
							// Include a dollar sign in the ticks
							callback: function (value, index, values) {
								return "$" + value;
							},
						},
					},
					x: {
						stacked: true,
					},
				},

				plugins: {
					legend: {
						display: true,
						labels: {
							color: "rgb(255, 255, 255)",
						},
					},
				},
			},
		});
	}, []);

	return <canvas className="mb-10 lg:pb-20 2xl:pb-32" id="myChart"></canvas>;
}
