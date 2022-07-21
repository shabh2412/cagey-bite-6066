import { Container, Stack } from "@chakra-ui/react";

export const HeroBanner = ({ left, center, right }) => {
	return (
		<Container maxW={"90%"}>
			<Stack
				className="px-2 py-2"
				direction="row"
				alignItems="center"
				gap="0"
				justifyContent="center">
				{left}
				{center}
				{right}
			</Stack>
		</Container>
	);
};
