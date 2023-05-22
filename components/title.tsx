import { Open_Sans } from "next/font/google";

const openSansFont = Open_Sans({
	weight: "700",
	subsets: ["latin"],
});

export default function Title() {
	return (
		<h1
			className={
				"text-white text-2xl text-center lg:text-left sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-8xl tracking-wide leading-snug m-auto lg:mt-10  " +
				openSansFont.className
			}
		>
			Calculate your investments
		</h1>
	);
}
