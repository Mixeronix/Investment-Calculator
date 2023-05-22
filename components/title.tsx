import { Open_Sans } from "next/font/google";

const openSansFont = Open_Sans({
	weight: "700",
	subsets: ["latin"],
});

export default function Title() {
	return (
		<h1
			className={
				openSansFont.className +
				" m-auto text-center text-2xl leading-snug tracking-wide text-white sm:text-3xl md:text-4xl lg:mt-10 lg:text-left xl:text-5xl 2xl:text-8xl"
			}
		>
			Calculate investments
		</h1>
	);
}
