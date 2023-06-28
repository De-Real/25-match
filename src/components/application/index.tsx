import React, { useEffect, useState } from "react";
import { StyledAppControl, StyledApplication } from "./styles/index.styled";
import Button from "../ui/button";
import useMatchesTotal from "@/hooks/use-matches-total";
import Modal from "../ui/modal";

const Application = () => {
	const [matchesTotal, updateMatchesTotal, clearMatchesTotal] =
		useMatchesTotal(25);
	const [userMatches, setUserMatches] = useState(0);
	const [isUserTurn, setIsUserTurn] = useState(true);
	const [shouldComputerStart, setShouldComputerStart] = useState(false);
	const [wasStarted, setWasStarted] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const restartGame = () => {
		setWasStarted(false);
		clearMatchesTotal();
		setUserMatches(0);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = (event: React.SyntheticEvent, reset: boolean = false) => {
		setIsModalOpen(false);
		if (reset) {
			restartGame();
		}
	};

	const updateShouldComputerStart = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setShouldComputerStart(e.target.checked);
		setIsUserTurn(!e.target.checked);
	};

	const updateWasStarted = () => {
		setWasStarted(true);
	};

	const switchTurn = (value: number) => {
		setIsUserTurn(false);
		setUserMatches((curState) => curState + value);
		updateMatchesTotal(value);
	};

	const makeComputerTurn = (value: number) => {
		// setComputerMatches((curState) => curState + value);
		updateMatchesTotal(value);
	};

	const getComputerMove = (matchesRemaining: number) => {
		if (matchesRemaining === 2) {
			if (userMatches % 2 === 0) {
				return 1;
			} else {
				return 2;
			}
		}

		const remainingMod4 = matchesRemaining % 4;

		if (remainingMod4 === 0) {
			return 3; // Take 3 matches to make the remaining divisible by 4
		} else {
			return Math.min(remainingMod4, matchesRemaining); // Take the remaining matches to make it divisible by 4
		}
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (wasStarted && !isUserTurn) {
				makeComputerTurn(getComputerMove(matchesTotal));
				setIsUserTurn(true);
			}
		}, 3000);

		return () => clearTimeout(timeout);
	}, [wasStarted, isUserTurn]);

	useEffect(() => {
		if (matchesTotal === 0) {
			setIsModalOpen(true);
		}
	}, [matchesTotal, userMatches]);

	const isButtonDisabled = (
		total: number,
		btnNumber: number,
		isUserTurn: boolean
	) => {
		if (!isUserTurn) return true;
		if (total < btnNumber) return true;
	};

	return (
		<>
			<Modal
				open={isModalOpen}
				handleOpen={openModal}
				handleClose={closeModal}
				userWon={userMatches % 2 === 0}
			/>
			<StyledApplication>
				<h1>25 Matches Game</h1>

				{!wasStarted && (
					<div className="arrangement">
						<input
							type="checkbox"
							onChange={updateShouldComputerStart}
							checked={shouldComputerStart}
						/>
						<label>Computer starts</label>
					</div>
				)}

				{/* {matchesTotal === 0 && (
					<div>{userMatches % 2 === 0 ? "You won!" : "Computer won :("}</div>
				)} */}

				<p>
					🧑 You vs <span>Computer</span> 🖥️
				</p>
				<p>Matches left: {matchesTotal}</p>
				<p>Your matches: {userMatches}</p>
				{!wasStarted && <Button onClick={updateWasStarted}>Start</Button>}
				{wasStarted && (
					<>
						<StyledAppControl>
							{isUserTurn && <p>Your turn!</p>}
							{!isUserTurn && <p>Computer&apos;s turn...</p>}

							<p>Take matches</p>
							<Button
								onClick={switchTurn.bind(null, 1)}
								disabled={isButtonDisabled(matchesTotal, 1, isUserTurn)}
							>
								1
							</Button>
							<Button
								onClick={switchTurn.bind(null, 2)}
								disabled={isButtonDisabled(matchesTotal, 2, isUserTurn)}
							>
								2
							</Button>
							<Button
								onClick={switchTurn.bind(null, 3)}
								disabled={isButtonDisabled(matchesTotal, 2, isUserTurn)}
							>
								3
							</Button>
						</StyledAppControl>
						<Button onClick={restartGame}>Play again</Button>
					</>
				)}
			</StyledApplication>
		</>
	);
};

export default Application;
