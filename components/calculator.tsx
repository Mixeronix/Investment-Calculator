"use client";

import { Open_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const openSansFont = Open_Sans({
	weight: "700",
	subsets: ["latin"],
});

export default function Calculator(props: { returnValues: Function }) {
	const [starting, setStarting] = useState(0);
	const [monthly, setMonthly] = useState(0);
	const [years, setYears] = useState(1);
	const [annual, setAnnual] = useState(1);

	useEffect(() => {
		props.returnValues({ starting, monthly, years, annual });
		console.log(props);
	}, [starting, monthly, years, annual]);

	return (
		<div className={"bg-white rounded-3xl p-10 flex flex-col w-1/3 justify-around " + openSansFont.className}>
			<div className="flex flex-col">
				<label htmlFor="starting" className="flex flex-row justify-between">
					Starting amount
					<span className="text-violet-600">{starting.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "$"}</span>
				</label>

				<input
					type="number"
					id="starting"
					className="numberInput"
					placeholder="$"
					value={starting.toString().replace(/^0+/, "")}
					onChange={(e) => setStarting(e.target.value != "" ? e.target.valueAsNumber : 0)}
				/>
			</div>

			<div className="flex flex-col">
				<label htmlFor="monthly" className="flex flex-row justify-between">
					Monthly contributions
					<span className="text-violet-600">{monthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "$"}</span>
				</label>

				<input
					type="number"
					id="monthly"
					className="numberInput"
					placeholder="$"
					value={monthly.toString().replace(/^0+/, "")}
					onChange={(e) => setMonthly(e.target.value != "" ? e.target.valueAsNumber : 0)}
				/>
			</div>

			<div className="flex flex-col">
				<label htmlFor="years" className="flex flex-row justify-between">
					Years of investing
					<span className="text-violet-600">{years + " years"}</span>
				</label>

				<input type="range" id="years" className="sliderInput" value={years} min={1} max={50} onChange={(e) => setYears(e.target.valueAsNumber)} />
			</div>

			<div className="flex flex-col">
				<label htmlFor="annual" className="flex flex-row justify-between">
					Annual return
					<span className="text-violet-600">{annual + "%"}</span>
				</label>

				<input type="range" id="annual" className="sliderInput" value={annual} min={1} max={100} onChange={(e) => setAnnual(e.target.valueAsNumber)} />
			</div>
		</div>
	);
}
