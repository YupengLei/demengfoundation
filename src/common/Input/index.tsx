import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder, onChange, t }: InputProps) => (
	<Container>
		<StyledInput
			placeholder={t(placeholder)}
			name={name}
			id={name}
			onChange={onChange}
		/>
	</Container>
);

export default withTranslation()(Input);
