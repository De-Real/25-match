import React, { forwardRef, memo } from "react";
import { StyledInput } from "./styles/input.styled";

type InputProps = {
	label: string;
	placeholder?: string;
	defaultValue?: string;
	type?: "checkbox" | "text";
};
export type Ref = HTMLInputElement;

const Input = forwardRef<Ref, InputProps>(
	({ label, defaultValue, type = "text" }, ref) => {
		return (
			<StyledInput>
				<label>{label}</label>
				<input type={type} ref={ref} placeholder={defaultValue} />
			</StyledInput>
		);
	}
);

//Need to set if we use forwardRef
Input.displayName = "InputCheckbox";

export default memo(Input);
