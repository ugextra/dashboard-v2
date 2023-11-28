import { RouteObject } from "react-router-dom";
import authRoutes from "./auth";
import adminRoutes from "./admin";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

const layouts: RouteObject[] = [
	{
		element: <AuthLayout />,
		children: authRoutes,
	},
	{
		element: <DashboardLayout />,
		children: adminRoutes,
	},
];

export default layouts;
