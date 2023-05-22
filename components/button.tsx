import { Open_Sans } from "next/font/google";

const openSansFont = Open_Sans({
	weight: "700",
	subsets: ["latin"],
});

export default function Button(props: { text: string }) {
	return (
		<button
			className={
				"text-white text-xl lg:text-2xl 2xl:text-3xl text-center tracking-wide leading-snug bg-violet-600 lg:absolute lg:bottom-14 xl:bottom-18 2xl:bottom-32 relative px-10 py-3 lg:py-4 lg:px-14 2xl:px-20 2xl:py-5 rounded-xl " +
				openSansFont.className
			}
		>
			{props.text}
		</button>
	);
}
