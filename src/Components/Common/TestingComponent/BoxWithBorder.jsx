import { Box } from "@chakra-ui/react";

export const BoxWBorder = ({
	children,
	style = {
		backgroundColor: "lightgray",
		width: "100%",
		textAlign: "center",
		color: "black",
	},
}) => {
	return <Box style={style}>{children}</Box>;
};
