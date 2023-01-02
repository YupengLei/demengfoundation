import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
	let errors = {} as validateProps;

	if (!values.email) {
		errors.email = "Email address is required";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email address is invalid";
	}

	return errors;
}
