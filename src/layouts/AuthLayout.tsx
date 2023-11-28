import { Outlet } from "react-router-dom";
import logo from "../assets/ugatunes-logo-dark.png";

export default function AuthLayout() {
	return (
		<div className="bg-gray-100 w-full h-screen flex">
			<div className="flex flex-col items-center mx-auto pt-3">
				<h1 className="text-gray-200 lg:text-[8.5em]/[100px] md:text-8xl sm:text-7xl text-5xl font-bold">
					UGATUNES
				</h1>
				<div className="shadow-md shadow-blue-gray-500/40 mt-4 text-center max-w-[380px] w-full  bg-gray-50 py-4 px-4">
					<div className="flex justify-center h-[100px]">
						<img
							src={logo}
							className="max-h-[100px]"
							alt="ugatunes logo"
						/>
					</div>
					<h3 className="font-bold mb-5 text-xl rounded text-gray-500">
						Super Dashboard
					</h3>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
