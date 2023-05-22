import { Open_Sans } from "next/font/google";

const openSansFont = Open_Sans({
	weight: "700",
	subsets: ["latin"],
});

type propsType = {
	setStarting: Function;
	setMonthly: Function;
	setYears: Function;
	setAnnual: Function;
	starting: number;
	monthly: number;
	years: number;
	annual: number;
};

export default function Calculator(props: propsType) {
	return (
		<div
			className={
				"bg-white rounded-3xl text-sm md:text-md p-10 flex flex-col gap-y-10 md:gap-y-8 lg:gap-y-5 xl:gap-y-0 w-full lg:w-3/5 2xl:w-1/3 justify-around " +
				openSansFont.className
			}
		>
			<div className="flex flex-col">
				<label htmlFor="starting" className="flex flex-row justify-between">
					Starting amount
					<span className="text-violet-600">{props.starting.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "$"}</span>
				</label>

				<input
					type="number"
					id="starting"
					className="numberInput"
					placeholder="$"
					value={props.starting.toString().replace(/^0+/, "")}
					onChange={(e) => props.setStarting(e.target.value != "" ? e.target.valueAsNumber : 0)}
				/>
			</div>

			<div className="flex flex-col">
				<label htmlFor="monthly" className="flex flex-row justify-between">
					Monthly contributions
					<span className="text-violet-600">{props.monthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "$"}</span>
				</label>

				<input
					type="number"
					id="monthly"
					className="numberInput"
					placeholder="$"
					value={props.monthly.toString().replace(/^0+/, "")}
					onChange={(e) => props.setMonthly(e.target.value != "" ? e.target.valueAsNumber : 0)}
				/>
			</div>

			<div className="flex flex-col">
				<label htmlFor="years" className="flex flex-row justify-between">
					Years of investing
					<span className="text-violet-600">{props.years + " years"}</span>
				</label>

				<input type="range" id="years" className="sliderInput" value={props.years} min={1} max={50} onChange={(e) => props.setYears(e.target.valueAsNumber)} />
			</div>

			<div className="flex flex-col">
				<label htmlFor="annual" className="flex flex-row justify-between">
					Annual return
					<span className="text-violet-600">{props.annual + "%"}</span>
				</label>

				<input type="range" id="annual" className="sliderInput" value={props.annual} min={1} max={100} onChange={(e) => props.setAnnual(e.target.valueAsNumber)} />
			</div>
		</div>
	);
}
