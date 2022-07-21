import {
	Container,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
} from "@chakra-ui/react";

export const AdminForm = () => {
	return (
		<Container bgGradient="linear(to-br, hotpink, darkorange)" rounded="md" p="5">
			<Heading color="black" textAlign="center">
				Admin Portal
			</Heading>
			<form>
				<FormControl>
					<FormLabel>Item Name</FormLabel>
					<Input type="text" />
					<FormHelperText>This name will be shown to the users.</FormHelperText>
				</FormControl>
			</form>
		</Container>
	);
};