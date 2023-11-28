import { Link } from "react-router-dom";

export default function ForgotPassword() {
	return (
		<div>
			<form action="" method="post">
				<p className="text-xs text-gray-500 mb-3">
					It happens most of the time, No worries, just drop your email and
					we will send you password reset instructions
				</p>
				<p className="font-semibold text-sm text-gray-600 mb-3">
					You will recieve an email almost instantly.
				</p>
				<div className="mb-4">
					<input
						type="text"
						className="w-full text-sm rounded border-gray-200 hover:border-primary focus:ring-primary/50"
						placeholder="Enter account email"
					/>
				</div>
				<div className="mb-4">
					<button
						className="bg-primary primary px-4 py-1 w-full rounded text-white"
						type="submit"
					>
						Send instructions
					</button>
				</div>
			</form>
			<Link className="text-sm text-sky-700" to={"/login"}>
				<small>Back to login</small>
			</Link>
		</div>
	);
}
