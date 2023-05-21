import { Open_Sans } from "next/font/google";

const openSansFont = Open_Sans({
	weight: "700",
	subsets: ["latin"],
});

export default function Title() {
	return (
		<h1 className={"text-white text-7xl tracking-wide leading-snug " + openSansFont.className}>
			Calculate your <br /> investments
		</h1>
	);
}
