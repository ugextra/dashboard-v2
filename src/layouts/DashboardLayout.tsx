import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
	return (
		<div className="bg-gray-200 w-full h-screen flex">
			<Sidebar />
			<div className="container">
				<Navbar />
				<Outlet />
			</div>
		</div>
	);
}
