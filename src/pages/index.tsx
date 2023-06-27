import Image from "next/image";
import { Inter } from "next/font/google";
import Application from "@/components/application";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<Image src="/matches-background.jpg" alt="Matches background" fill />
			<Application />
		</main>
	);
}
