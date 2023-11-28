import { Outlet } from "react-router-dom";
import logo from "../../assets/ugatunes-logo-dark.png";

export default function DashboardLayout() {
	return (
		<div className="bg-gray-600 w-full h-screen flex">
			<Outlet />
		</div>
	);
}
