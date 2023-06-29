import * as React from "react";
import Box from "@mui/material/Box";
import MUIModal from "@mui/material/Modal";
import Button from "./button";
import { StyledModal } from "./styles/modal.styled";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
	borderRadius: 5,
};

type ModalProps = {
	userWon: boolean;
	open: boolean;
	handleOpen: () => void;
	handleClose: (event: React.SyntheticEvent, reset?: boolean) => void;
};

const Modal = ({ open, handleClose, userWon }: ModalProps) => {
	return (
		<div>
			<MUIModal
				open={open}
				onClose={handleClose.bind}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<StyledModal>
						<h2>
							{userWon
								? "You won! Congratulations!"
								: "You was defeated by computer :("}
						</h2>

						<Button onClick={(event) => handleClose(event, true)}>
							Play again
						</Button>
						<Button onClick={handleClose}>Close</Button>
					</StyledModal>
				</Box>
			</MUIModal>
		</div>
	);
};

export default React.memo(Modal);
