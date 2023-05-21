import { Open_Sans } from "next/font/google";

const openSansFont = Open_Sans({
	weight: "700",
	subsets: ["latin"],
});

export default function Calculator() {
	return (
		<div className={"bg-white rounded-3xl p-10 flex flex-col w-1/3 justify-around " + openSansFont.className}>
			<div className="flex flex-col">
				<label htmlFor="starting">Starting amount</label>
				<input type="number" id="starting" className="numberInput" placeholder="$" />
			</div>
			<div className="flex flex-col">
				<label htmlFor="monthly">Monthly contributions</label>
				<input type="number" id="monthly" className="numberInput" placeholder="$" />
			</div>
			<div className="flex flex-col">
				<label htmlFor="years">Years of investing</label>
				<input type="range" id="years" className="sliderInput" />
			</div>
			<div className="flex flex-col">
				<label htmlFor="annual">Annual return</label>
				<input type="range" id="annual" className="sliderInput" />
			</div>
		</div>
	);
}
