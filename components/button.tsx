"use client";

import { Open_Sans } from "next/font/google";
import { useEffect } from "react";

const openSansFont = Open_Sans({
	weight: "700",
	subsets: ["latin"],
});

export default function Button(props: { text: string }) {
	useEffect(() => {
		const button = document.querySelector("button");

		const handleMouseMove = (event: { clientX: number; clientY: number }) => {
			const rect: any = button?.getBoundingClientRect();
			const ripple: any = document.getElementById("ripple");

			const x = event.clientX - rect.x;
			const y = event.clientY - rect.y;

			if (x > 0 && x < rect.width) ripple.style.left = `${x}px`;
			if (y > 0 && y < rect.height) ripple.style.top = `${y}px`;
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
	return (
		<button
			id={"clickableButton"}
			className={
				"xl:bottom-18 group relative overflow-hidden rounded-xl bg-violet-600 px-10 py-3 text-center text-xl leading-snug tracking-wide lg:absolute lg:bottom-14 lg:px-14 lg:py-4 lg:text-2xl 2xl:bottom-32 2xl:px-20 2xl:py-5 2xl:text-3xl  " +
				openSansFont.className
			}
		>
			<div
				id="ripple"
				className="pointer-events-none absolute aspect-square h-auto w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-500 group-hover:w-2full"
			></div>
			<div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-violet-600 opacity-0 transition-all group-hover:opacity-100">
				{props.text}
			</div>
			<div className="text-white">{props.text}</div>
		</button>
	);
}
