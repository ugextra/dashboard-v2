import { Outlet, RouteObject } from "react-router-dom";
import authRoutes from "./auth";
import adminRoutes from "./admin";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import NotFound from "../views/errors/NotFound";
import ErrorBoundary from "../components/ErrorBoundary";

const ErrorBoundaryLayout = () => (
	<ErrorBoundary fallback={<p>Something went wrong</p>}>
		<Outlet />
	</ErrorBoundary>
);

const layouts: RouteObject[] = [
	{
		element: <ErrorBoundaryLayout />,
		children: [
			{
				element: <AuthLayout />,
				children: authRoutes,
			},
			{
				element: <DashboardLayout />,
				children: adminRoutes,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
];

export default layouts;
