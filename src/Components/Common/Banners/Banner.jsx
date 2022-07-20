import { Box, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const BigBanner = ({ src, target = "/men" }) => {
	return (
		<Box my="2" px="2">
			<Link to={target}>
				<Image maxW={"100%"} src={src} />
			</Link>
		</Box>
	);
};

export const Banner = ({ image, target = "/men" }) => {
	return (
		<Box>
			<Link to={target}>
				<Image maxW={"100%"} src={image} />
			</Link>
		</Box>
	);
};

export const OffersBanner = ({ images = [] }) => {
	return (
		<Flex direction="row" justifyContent="space-evenly">
			{images?.map((image) => (
				<Banner image={image} />
			))}
		</Flex>
	);
};
