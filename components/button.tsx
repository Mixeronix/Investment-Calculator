import { Open_Sans } from "next/font/google";

const openSansFont = Open_Sans({
	weight: "700",
	subsets: ["latin"],
});

export default function Button(props: { text: string }) {
	return (
		<button
			className={
				"xl:bottom-18 relative rounded-xl bg-violet-600 px-10 py-3 text-center text-xl leading-snug tracking-wide text-white lg:absolute lg:bottom-14 lg:px-14 lg:py-4 lg:text-2xl 2xl:bottom-32 2xl:px-20 2xl:py-5 2xl:text-3xl " +
				openSansFont.className
			}
		>
			{props.text}
		</button>
	);
}
