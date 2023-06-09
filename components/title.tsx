import { Open_Sans } from "next/font/google";

const openSansFont = Open_Sans({
	weight: "700",
	subsets: ["latin"],
});

export default function Title(props: { value: number }) {
	return (
		<h1
			className={
				openSansFont.className +
				" m-auto text-center text-2xl leading-snug tracking-wide text-white sm:text-3xl md:text-4xl lg:mx-0 lg:mt-10 lg:text-left xl:text-5xl 2xl:text-7xl"
			}
		>
			Calculate investments
			<br />
			<span className={`text-xl text-violet-600 transition-all sm:text-2xl lg:text-3xl ${props.value != 0 ? "opacity-100" : "opacity-0"}`}>
				{(Math.round(props.value * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "$"}
			</span>
		</h1>
	);
}
