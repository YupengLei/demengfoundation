import { lazy, Suspense, useState } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./config";
import { Styles } from "../styles/styles";
import SubFooter from "../components/SubscriptionBlock/subFooter";
import SubHeader from "../components/Header/subheader";


const Router = () => {
	const [visibleDrawer, setVisibilityDrawer] = useState(false);
	const [visibleSearch, setVisibilitySearch] = useState(false);

	const showDrawer = () => {
		setVisibilityDrawer(true);
		setVisibilitySearch(true);
	};

	const onClose = () => {
		setVisibilityDrawer(false);
		setVisibilitySearch(false);
	};

	const showSearch = () => {
		setVisibilitySearch(true);
	};

	return (
		<Suspense fallback={null}>
			<Styles />
			<SubHeader
			/>

			<Switch>
				{routes.map((routeItem) => {
					return (
						<Route
							key={routeItem.component}
							path={routeItem.path}
							exact={routeItem.exact}
							component={lazy(() => import(`../pages/${routeItem.component}`))}
						/>
					);
				})}
			</Switch>

			<SubFooter />
		</Suspense>
	);
};

export default Router;
