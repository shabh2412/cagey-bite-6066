import { Box, Image } from "@chakra-ui/react";

export const BigBanner = ({ src }) => {
	return (
		<Box my="2" px="2">
			<Image maxW={"100%"} src={src} />
		</Box>
	);
};
