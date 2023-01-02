import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";




const Contact = ({ title, content, id, t }: ContactProps) => {
	const { values, errors, handleChange, handleSubmit } = useForm(
		validate
	) as any;

	const ValidationType = ({ type }: ValidationTypeProps) => {
		const ErrorMessage = errors[type];
		return (
			<Zoom direction="left">
				<Span erros={errors[type]}>{ErrorMessage}</Span>
			</Zoom>
		);
	};

	return (
		<ContactContainer id={id}>
			<Row justify="space-between" align="middle">

				<Col lg={24} md={24} sm={24} xs={24}>
					<Slide direction="right">
						<FormGroup autoComplete="off" onSubmit={handleSubmit}>
							<Col span={16}>
								<Input
									type="text"
									name="email"
									placeholder="Your Email Address"
									value={values.email || ""}
									onChange={handleChange}
								/>
								<ValidationType type="email" />
							</Col>

							<ButtonContainer >
								<Button name="submit" color="#fca131">{t("SUBMIT")}</Button>
							</ButtonContainer>

						</FormGroup>
					</Slide>
				</Col>
			</Row>
		</ContactContainer>
	);
};

export default withTranslation()(Contact);


