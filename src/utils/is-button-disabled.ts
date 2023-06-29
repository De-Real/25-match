export const isButtonDisabled = (
	total: number,
	btnNumber: number,
	isUserTurn: boolean
) => {
	if (!isUserTurn) return true;
	if (total < btnNumber) return true;
};
