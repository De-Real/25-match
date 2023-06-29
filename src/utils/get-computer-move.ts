export const getComputerMove = (
	matchesRemaining: number,
	userMatches: number,
	m: number
): number => {
	if (matchesRemaining === 2) {
		if (userMatches % 2 === 0) {
			return 1;
		} else {
			return 2;
		}
	}

	if (matchesRemaining <= m) {
		const remainingMod = matchesRemaining % (m + 1);
		if (remainingMod === 0) {
			return Math.min(m, matchesRemaining - 1);
		} else {
			return Math.min(remainingMod - 1, m);
		}
	}

	const remainingMod = matchesRemaining % (m + 1);

	if (remainingMod === 0) {
		return Math.min(m, matchesRemaining - 1);
	} else {
		return Math.min(remainingMod - 1, m);
	}
};
