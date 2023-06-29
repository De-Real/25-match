import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Match Pile Game</title>
				<meta
					name="description"
					content={`Welcome to the "Match Pile Game"! In this strategic game, two players take turns removing matches from a pile. The goal is to be the player who takes the last match. The pile starts with 2n + 1 matches, and each player can take 1 to m matches per turn. The AI opponent follows an optimal strategy to maximize its chances of winning. It considers the number of matches remaining and the user's moves to make informed decisions. The AI adjusts its strategy based on the chosen values of n and m. Can you outsmart the AI and claim victory in this exciting game?`}
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
