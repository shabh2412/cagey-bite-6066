import { Box, Link as ChLink } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const IconLink = ({ Icon, path, children }) => {
	return (
		<Box border="1px solid red">
			<Icon />
			<ChLink as={NavLink} to={path}>
				{children}
			</ChLink>
		</Box>
	);
};
