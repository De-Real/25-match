import { styled } from "styled-components";

export const StyledApplication = styled.div`
	background-color: white;
	padding: 40px 25px;
	border-radius: 10px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	max-width: 700px;

	& .arrangement {
		border: 1px solid rgb(211, 211, 211);
		width: 100%;
		padding: 20px 15px;
		margin-bottom: 40px;
	}

	& p {
		font-size: 24px;
	}
`;

export const StyledAppControl = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	column-gap: 25px;
	row-gap: 15px;
	border: 1px solid grey;
	padding: 10px;
	border-radius: 5px;
	& p {
		flex: 1 1 100%;
		text-align: center;
	}
`;
