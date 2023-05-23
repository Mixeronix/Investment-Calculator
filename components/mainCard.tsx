"use client";

import { useEffect, useState } from "react";
import Calculator from "./calculator";
import Title from "./title";
import Button from "./button";
import Graph from "./graph";

type passDataFunction = { starting: number; monthly: number; years: number; annual: number };

let interest: Array<number> = [];

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

	interest.push(yearValue);

	return yearValue;
}

export default function MainCard() {
	const [starting, setStarting] = useState(0);
	const [monthly, setMonthly] = useState(0);
	const [years, setYears] = useState(1);
	const [annual, setAnnual] = useState(1);
	const [isGraphShow, setGraphState] = useState(false);

	function changeState() {
		const stateNow = !isGraphShow;
		setGraphState(stateNow);
		console.log(returnValues({ starting, monthly, years, annual }));
	}

	useEffect(() => {
		interest = [];
	});

	return (
		<section className="relative flex w-11/12 flex-col justify-between gap-y-6 rounded-3xl bg-gray-900 px-4 py-8 sm:p-12 md:w-4/5 md:p-14 lg:w-3/4 lg:flex-row xl:aspect-video xl:p-12 2xl:p-24">
			{isGraphShow ? <></> : <Title value={returnValues({ starting, monthly, years, annual })} />}
			{isGraphShow ? (
				<Graph monthly={monthly} starting={starting} interest={interest} />
			) : (
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
			)}

			{isGraphShow ? (
				<Button text="Less datails" calculateFn={() => changeState} active={true} />
			) : (
				<Button text="Details" calculateFn={() => changeState} active={starting != 0 || monthly != 0} />
			)}
		</section>
	);
}
