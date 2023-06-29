import React from "react";

export const createButtonsArray = (length: number) => {
	return [...Array(length)].map((_, index) => index + 1);
};
