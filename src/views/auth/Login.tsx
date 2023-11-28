import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type LoginForm = {
	username: string;
	password: string;
};

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginForm>();

	const onSubmit: SubmitHandler<LoginForm> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="" method="post">
			<div className="mb-4 text-left">
				<input
					type="text"
					className={`w-full text-sm rounded-sm outline-none focus:outline-none  ${
						errors.username
							? "border-red-500 focus:border-red-500 hover:border-red-500 focus:ring-red-500"
							: "border-gray-200 hover:border-primary focus:ring-primary/50 "
					}`}
					placeholder="Username or email"
					{...register("username", {
						required: "The username is required",
					})}
				/>
				<small className="text-red-500 texr-xs">
					{errors.username?.message}
				</small>
			</div>
			<div className="mb-4 text-left">
				<input
					type="password"
					className={`w-full text-sm rounded-sm outline-none focus:outline-none  ${
						errors.password
							? "border-red-500 focus:border-red-500 hover:border-red-500 focus:ring-red-500"
							: "border-gray-200 hover:border-primary focus:ring-primary/50 "
					}`}
					placeholder="Password"
					{...register("password", {
						required: "The password is required",
					})}
				/>
				<small className="text-red-500 text-xs">
					{errors.password?.message}
				</small>
			</div>
			<div className="mb-4">
				<button
					className="bg-primary primary px-4 py-1 w-full rounded text-white"
					type="submit"
				>
					Login
				</button>
			</div>
			<div>
				<Link className="text-sm text-sky-700" to={"/forgot-password"}>
					<small>Forgot password?</small>
				</Link>
			</div>
		</form>
	);
}
