import {
	Container,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
} from "@chakra-ui/react";

const initData = {
	name: "",
	brand: "",
	price: "",
	category: "",
	section: "",
	color: "",
	images: [],
	description: "",
};
export const AdminForm = () => {
	return (
		<Container bgGradient="linear(to-br, hotpink, orange)" rounded="md" p="5">
			<Heading color="black" textAlign="center">
				Admin Portal
			</Heading>
			<form>
				<FormControl my="5">
					{/* <FormLabel>Item Name</FormLabel> */}
					<Input type="text" placeholder="Item Name" />
					<FormHelperText>This name will be shown to the users.</FormHelperText>
				</FormControl>
			</form>
		</Container>
	);
};
