import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection, ContentWrapper } from "./styles";
import { Fade } from "react-awesome-reveal";


interface MiddleBlockProps {
	title: string;
	content: string;
	button: string;
	t: any;
	id: any;
	childComp: React.ReactNode;
	direction: string;
}

const MiddleBlock = ({ title, content, button, t, id, childComp, direction }: MiddleBlockProps) => {

	return (
		<MiddleBlockSection>
			{
				{
					"up": <Slide direction="up">
						<Row justify="center" align="middle" id={id} >
							<ContentWrapper>
								<Col lg={24} md={24} sm={24} xs={24}>
									{childComp}
								</Col>
							</ContentWrapper>
						</Row>
					</Slide>,
					'left': <Fade direction="left">
						<Row justify="center" align="middle" id={id} >
							<ContentWrapper>
								<Col lg={24} md={24} sm={24} xs={24}>
									{childComp}
								</Col>
							</ContentWrapper>
						</Row>
					</Fade>,
					'right': <Fade direction="right">
						<Row justify="center" align="middle" id={id} >
							<ContentWrapper>
								<Col lg={24} md={24} sm={24} xs={24}>
									{childComp}
								</Col>
							</ContentWrapper>
						</Row>
					</Fade>,
				}[direction]
			}


		</MiddleBlockSection>
	);
};

export default withTranslation()(MiddleBlock);
