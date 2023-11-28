import { RouteObject } from "react-router-dom";
import Login from "../views/auth/Login";
import ForgotPassword from "../views/auth/ForgotPassword";

const routes: RouteObject[] = [
	{ path: "/", element: <Login /> },
	{ path: "/login", element: <Login /> },
	{ path: "/forgot-password", element: <ForgotPassword /> },
];

export default routes;
