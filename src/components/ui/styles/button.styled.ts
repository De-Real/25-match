import { styled } from "styled-components";

export const StyledButton = styled.button`
	background-color: orange;
	padding: 10px 40px;
	border-radius: 5px;
	font-weight: 700;

	&:disabled {
		background-color: rgb(211,211,211);
	}
`;
