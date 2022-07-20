import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const SearchBar = ({ text }) => {
	return (
		<InputGroup border="1px solid tomato">
			<InputLeftElement
				pointerEvents="none"
				children={<SearchIcon color="gray.500" />}
			/>
			<Input />
		</InputGroup>
	);
};
