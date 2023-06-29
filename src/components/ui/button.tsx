import React, { memo } from "react";
import { StyledButton } from "./styles/button.styled";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

const Button = ({ onClick, disabled, children }: ButtonProps) => {
	return (
		<StyledButton onClick={onClick} disabled={disabled}>
			{children}
		</StyledButton>
	);
};

export default memo(Button);
