"use client";

import { useState } from "react";
import Calculator from "./calculator";
import Title from "./title";

type passDataFunction = { starting: number; monthly: number; years: number; annual: number };

function returnValues({ starting, monthly, years, annual }: passDataFunction): number {
	let i: number = years - 1;
	let yearValue: number;

	const percent: number = (annual + 100) / 100;
	const yearContribution: number = monthly * 12;

	if (years == 1) {
		yearValue = percent * (starting + yearContribution);
	} else {
		yearValue = percent * (returnValues({ starting, monthly, years: i, annual }) + yearContribution);
	}

	return yearValue;
}

export default function MainCard() {
	const [starting, setStarting] = useState(0);
	const [monthly, setMonthly] = useState(0);
	const [years, setYears] = useState(1);
	const [annual, setAnnual] = useState(1);

	function passData({ starting, monthly, years, annual }: passDataFunction) {
		setAnnual(annual);
		setStarting(starting);
		setMonthly(monthly);
		setYears(years);
	}

	return (
		<section className="bg-gray-950 w-3/4 rounded-3xl aspect-video p-32 flex justify-between">
			<Title />
			<Calculator returnValues={passData} />
		</section>
	);
}
