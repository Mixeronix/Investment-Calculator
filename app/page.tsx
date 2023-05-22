import MainCard from "@/components/mainCard";
import Image from "next/image";

export default function Home() {
	return (
		<main className="w-screen h-screen relative flex justify-center items-center">
			<MainCard />
			<Image src="/background.jpg" alt="" fill={true} className="absolute top-0 left-0 -z-10 bg-contain" />
		</main>
	);
}
