import { Open_Sans } from "next/font/google";
import Calculator from "./calculator";

const openSansFont = Open_Sans({
	weight: "700",
	subsets: ["latin"],
});

export default function MainCard() {
	return (
		<section className="bg-gray-950 w-3/4 rounded-3xl aspect-video p-32 flex justify-between">
			<h1 className={"text-white text-7xl tracking-wide leading-snug " + openSansFont.className}>
				Calculate your <br /> investments
			</h1>

			<Calculator />
		</section>
	);
}
