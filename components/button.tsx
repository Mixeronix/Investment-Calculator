"use client";

import { Open_Sans } from "next/font/google";
import { useEffect } from "react";

const openSansFont = Open_Sans({
	weight: "700",
	subsets: ["latin"],
});

export default function Button(props: { text: string; calculateFn: Function }) {
	useEffect(() => {
		const button: any = document.getElementById("clickableButton");
		let hovered: boolean = false;

		const handleMouseMove = (event: { clientX: number; clientY: number }) => {
			const rect: any = button?.getBoundingClientRect();
			const ripple: any = document.getElementById("ripple");

			const x = event.clientX - rect.x;
			const y = event.clientY - rect.y;

			const lenX = Math.min(x, button.offsetWidth - x);
			const lenY = Math.min(y, button.offsetHeight - y);

			let posX;
			let posY;

			if (lenX > lenY) {
				if (x < 0) posX = -100;
				else if (x > button.offsetWidth) posX = button.offsetWidth + 100;
				else posX = x;

				posY = y > button.offsetHeight / 2 ? button.offsetHeight + 100 : -100;
			} else if (lenX < lenY) {
				if (y < 0) posY = -100;
				else if (x > button.offsetHeight) posY = button.offsetHeight + 100;
				else posY = y;

				posX = x > button.offsetWidth / 2 ? button.offsetWidth + 100 : -100;
			}

			if (hovered) {
				ripple.style.left = `${posX}px`;
				ripple.style.top = `${posY}px`;
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		button.addEventListener("mouseenter", () => (hovered = true));
		button.addEventListener("mouseleave", () => (hovered = false));

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
	return (
		<button
			onClick={props.calculateFn()}
			id={"clickableButton"}
			className={
				"xl:bottom-18 group relative overflow-hidden rounded-xl bg-violet-600 px-10 py-3 text-center text-xl leading-snug tracking-wide lg:absolute lg:bottom-14 lg:px-14 lg:py-4 lg:text-2xl 2xl:bottom-32 2xl:px-20 2xl:py-5 2xl:text-3xl  " +
				openSansFont.className
			}
		>
			<div
				id="ripple"
				className="group-hover:w-3full pointer-events-none absolute aspect-square h-auto w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white duration-500"
			></div>

			<div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-violet-600 opacity-0 transition-all delay-150 group-hover:opacity-100 lg:delay-75">
				{props.text}
			</div>
			<div className="text-white">{props.text}</div>
		</button>
	);
}
