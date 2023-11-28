export interface InputFieldProps
	extends React.ComponentPropsWithoutRef<"input"> {
	hasError: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ hasError, ...props }) => {
	return (
		<input
			type="text"
			className={`w-full text-sm rounded-sm outline-none focus:outline-none  ${
				hasError
					? "border-red-500 focus:border-red-500 hover:border-red-500 focus:ring-red-500"
					: "border-gray-200 hover:border-primary focus:ring-primary/50 "
			}`}
			{...props}
		/>
	);
};

export default InputField;
