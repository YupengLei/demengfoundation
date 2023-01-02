import { lazy } from "react";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import How from "../../components/HowWeWork/how";
import Who from "../../components/WhoWeAre/who";
import What from "../../components/WhatWeDo/what";
import Intro from "../../components/Intro/intro";
import Partner from "../../components/partner/partner";




const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
	return (
		<Container>
			<ScrollToTop />
			<Intro />
			<MiddleBlock
				title={MiddleBlockContent.title}
				content={MiddleBlockContent.text}
				button={MiddleBlockContent.button}
				id="how"
				childComp={<How />}
				direction="right"
			/>
			<MiddleBlock
				title={MiddleBlockContent.title}
				content={MiddleBlockContent.text}
				button={MiddleBlockContent.button}
				id="what"
				childComp={<What />}
				direction="left"
			/>
			<MiddleBlock
				title={MiddleBlockContent.title}
				content={MiddleBlockContent.text}
				button={MiddleBlockContent.button}
				id="who"
				childComp={<Who />}
				direction="right"
			/>
			<MiddleBlock
				title={MiddleBlockContent.title}
				content={MiddleBlockContent.text}
				button={MiddleBlockContent.button}
				id="partner"
				childComp={<Partner />}
				direction="left"
			/>




		</Container>
	);
};

export default Home;

