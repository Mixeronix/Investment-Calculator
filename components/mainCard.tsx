"use client";

import { useState } from "react";
import Calculator from "./calculator";
import Title from "./title";
import Button from "./button";

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

	return (
		<section className="relative bg-gray-900 w-11/12  md:w-4/5 lg:w-3/4 rounded-3xl xl:aspect-video px-4 py-8 sm:p-12 md:p-14 xl:p-18 2xl:p-32 flex flex-col lg:flex-row justify-between gap-y-6">
			<Title />
			<Calculator
				setStarting={setStarting}
				setMonthly={setMonthly}
				setYears={setYears}
				setAnnual={setAnnual}
				starting={starting}
				monthly={monthly}
				years={years}
				annual={annual}
			/>
			<Button text="Calculate" />
		</section>
	);
}
