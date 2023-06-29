import { styled } from "styled-components";

export const StyledInput = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	font-size: 20px;
	margin-bottom: 5px;

	& label {
		width: 160px;
	}
	& input {
		border: 1px solid rgb(211, 211, 211);
		color: rgb(211, 211, 211);
		padding: 5px;
		border-radius: 5px;
		max-width: 60px;

		&:focus {
			border: 1px solid black;
			color: black;
		}
	}
`;
