import { useState } from "react";

export const useModal = (restartCb: () => void) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = (event: React.SyntheticEvent, reset: boolean = false) => {
		setIsModalOpen(false);
		if (reset) {
			restartCb();
		}
	};

	return { isModalOpen, openModal, closeModal };
};
