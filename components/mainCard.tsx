"use client";

import { Open_Sans } from "next/font/google";
import Calculator from "./calculator";

const openSansFont = Open_Sans({
	weight: "700",
	subsets: ["latin"],
});

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
			<h1 className={"text-white text-7xl tracking-wide leading-snug " + openSansFont.className}>
				Calculate your <br /> investments
			</h1>

			<Calculator returnValues={passData} />
		</section>
	);
}
