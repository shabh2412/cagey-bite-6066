import { FormControl, Select } from "@chakra-ui/react";

export const InputElement = ({
	name,
	placeholder,
	type,
	value,
	setValue,
	children,
}) => {
	return (
		<FormControl>
			{type === "select" ? (
				<Select name={name} onChange={setValue} _selected={value}>
					{children}
				</Select>
			) : (
				<Input
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={setValue}
				/>
			)}
		</FormControl>
	);
};
