import * as React from "react";
import Box from "@mui/material/Box";
import MUIModal from "@mui/material/Modal";
import Button from "./button";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

type ModalProps = {
	userWon: boolean;
	open: boolean;
	handleOpen: () => void;
	handleClose: (event: React.SyntheticEvent, reset?: boolean) => void;
};

const Modal = ({ open, handleOpen, handleClose, userWon }: ModalProps) => {
	return (
		<div>
			<MUIModal
				open={open}
				onClose={handleClose.bind}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<h2>
						{userWon
							? "You won! Congratulations!"
							: "You was defeated by computer :("}
					</h2>
					<Button onClick={(event) => handleClose(event, true)}>
						Play again
					</Button>
					<Button onClick={handleClose}>Close</Button>
				</Box>
			</MUIModal>
		</div>
	);
};

export default Modal;
