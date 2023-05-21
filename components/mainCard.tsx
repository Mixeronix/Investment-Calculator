import { Open_Sans } from "next/font/google";

const openSansFont = Open_Sans({
	weight: "700",
	subsets: ["latin"],
});

export default function MainCard() {
	return (
		<section className="bg-gray-950 w-3/4 rounded-3xl aspect-video p-28">
			<h1 className={"text-white text-7xl " + openSansFont.className}>
				Calculate your <br /> investments
			</h1>
		</section>
	);
}
