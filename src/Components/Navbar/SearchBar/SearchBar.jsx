import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import "./SearchBar.css";

export const SearchBar = ({ text }) => {
	return (
		<InputGroup>
			<InputLeftElement
				pointerEvents="none"
				children={<SearchIcon color="gray.500" />}
			/>
			<Input placeholder={text} fontSize="14px" />
		</InputGroup>
	);
};
