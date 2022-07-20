import { Image, Link as ChLink } from "@chakra-ui/react";

const style = {
	margin: 0,
};

export const HeroBannerGrid = ({ image, link = "/" }) => {
	return (
		<ChLink href={link} style={style}>
			<Image width="100%" height="400px" src={image} style={style} />
		</ChLink>
	);
};
