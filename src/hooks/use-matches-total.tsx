import React, { useState } from "react";

const useMatchesTotal = (initial?: number) => {
	const [matchesTotal, setMatchesTotal] = useState(initial || 25);

	const updateMatchesTotal = (value: number) => {
		setMatchesTotal((curState) => {
			const newValue = curState - value;
			return newValue;
		});
	};

	const clearMatchesTotal = () => {
		setMatchesTotal(initial || 25);
	};

	return [matchesTotal, updateMatchesTotal, clearMatchesTotal] as const;
};

export default useMatchesTotal;
