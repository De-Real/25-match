import React, { useCallback, useEffect, useRef, useState } from "react";
import {
	StyledAppControl,
	StyledApplication,
	StyledArrangement,
} from "./styles/index.styled";
import Button from "../ui/button";
import useMatchesTotal from "@/hooks/use-matches-total";
import Modal from "../ui/modal";
import { useModal } from "@/hooks/use-modal";
import { getComputerMove } from "@/utils/get-computer-move";
import { isButtonDisabled } from "@/utils/is-button-disabled";
import Input from "../ui/input";
import { evaluateMatches } from "@/utils/evaluate-matches";
import { createButtonsArray } from "@/utils/create-buttons-array";

const Application = () => {
	const {
		matchesTotal,
		updateMatchesTotal,
		clearMatchesTotal,
		arrangeMatchesTotal,
	} = useMatchesTotal(25);
	const [userMatches, setUserMatches] = useState(0);
	const [isUserTurn, setIsUserTurn] = useState(true);
	const [wasStarted, setWasStarted] = useState(false);
	const [mValue, setMValue] = useState("3");
	const [nValue, setNValue] = useState("25");

	const firstTurnRef = useRef<HTMLInputElement | null>(null);
	const nInputRef = useRef<HTMLInputElement | null>(null);
	const mInputRef = useRef<HTMLInputElement | null>(null);

	const restartGame = () => {
		setWasStarted(false);
		clearMatchesTotal();
		setUserMatches(0);
	};

	const { isModalOpen, openModal, closeModal } = useModal(restartGame);

	const updateWasStarted = () => {
		setIsUserTurn(!firstTurnRef.current?.checked);
		arrangeMatchesTotal(evaluateMatches(nInputRef.current?.value || "12"));
		setMValue(mInputRef.current?.value || "3");
		setNValue(nInputRef.current?.value || "25");
		setWasStarted(true);
	};

	const makeComputerTurn = useCallback(
		(value: number) => {
			updateMatchesTotal(value);
		},
		[updateMatchesTotal]
	);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (wasStarted && !isUserTurn) {
				makeComputerTurn(
					getComputerMove(matchesTotal, userMatches, +nValue, +mValue)
				);
				setIsUserTurn(true);
			}
		}, 1500);

		return () => clearTimeout(timeout);
	}, [
		wasStarted,
		isUserTurn,
		makeComputerTurn,
		matchesTotal,
		userMatches,
		mValue,
		nValue,
	]);

	useEffect(() => {
		if (matchesTotal === 0) {
			openModal();
		}
	}, [matchesTotal]);

	const bindedSwitch = useCallback(
		(value: number) => {
			const switchTurn = (value: number) => {
				setIsUserTurn(false);
				setUserMatches((curState) => curState + value);
				updateMatchesTotal(value);
			};

			return switchTurn.bind(null, value);
		},
		[updateMatchesTotal]
	);

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
					<StyledArrangement>
						<Input ref={firstTurnRef} type="checkbox" label="Computer starts" />
						<Input ref={nInputRef} label="Enter n-value:" defaultValue="12" />
						<Input ref={mInputRef} label="Enter m-value:" defaultValue="3" />
					</StyledArrangement>
				)}
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
							{createButtonsArray(+mValue).map((element) => (
								<Button
									key={element}
									onClick={bindedSwitch(element)}
									disabled={isButtonDisabled(matchesTotal, element, isUserTurn)}
								>
									{element}
								</Button>
							))}
						</StyledAppControl>
						<Button onClick={restartGame}>Play again</Button>
					</>
				)}
			</StyledApplication>
		</>
	);
};

export default Application;
