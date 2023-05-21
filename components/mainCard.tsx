"use client";

import Calculator from "./calculator";
import Title from "./title";

type passDataFunction = { starting: number; monthly: number; years: number; annual: number };

function passData({ starting, monthly, years, annual }: passDataFunction) {
	console.log(returnValues({ starting, monthly, years, annual }));
}

function returnValues({ starting, monthly, years, annual }: passDataFunction): number {
	let i: number = years - 1;

	if (years == 1) {
		return ((annual + 100) / 100) * (starting + monthly * 12);
	} else {
		return ((annual + 100) / 100) * (returnValues({ starting, monthly, years: i, annual }) + monthly * 12);
	}
}

export default function MainCard() {
	return (
		<section className="bg-gray-950 w-3/4 rounded-3xl aspect-video p-32 flex justify-between">
			<Title />
			<Calculator returnValues={passData} />
		</section>
	);
}
