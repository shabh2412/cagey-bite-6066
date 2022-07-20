import { Box, Link as ChLink, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const NavMenuItem = ({ children, path }) => {
	return (
		<Box py="5" px="3">
			<ChLink
				as={NavLink}
				to={path}
				className="nav-menu-item"
				color={"#282c3f"}>
				<Text>{children}</Text>
			</ChLink>
		</Box>
	);
};
