import MainCard from "@/components/mainCard";
import Image from "next/image";

export default function Home() {
	return (
		<main className="relative flex h-screen w-screen items-center justify-center">
			<MainCard />
			<Image src="/background.jpg" alt="" fill={true} className="absolute left-0 top-0 -z-10 bg-contain" />
		</main>
	);
}
