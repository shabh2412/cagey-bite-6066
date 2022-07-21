import {
	Box,
	VStack,
	Link as ChLink,
	Text,
	HStack,
	Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const FooterColumn = ({ column }) => {
	console.log(column);
	const navLinkStyles = {
		_hover: {
			textDecoration: "none",
		},
	};
	// return <h1>hi</h1>;
	return (
		<Box>
			{column?.map(({ title, categories }) => (
				<VStack key={title} mb="2">
					<Box mt="3" mb="5" width="100%">
						<Text>
							<ChLink
								{...navLinkStyles}
								as={Link}
								to={title}
								fontSize="12px"
								color="#282c3f"
								fontWeight="700"
								textTransform="uppercase"
								textDecoration="none">
								{title}
							</ChLink>
						</Text>
					</Box>
					<Box
						color="#696b79"
						textTransform="capitalize"
						fontSize="15px"
						width="100%">
						{categories?.map((category) =>
							category.img ? (
								<HStack key={category.img.length}>
									{category.img?.map((src) => (
										<Image src={src} maxW="145" key={src} />
									))}
								</HStack>
							) : category.logo ? (
								<HStack>
									{category.logo?.map((src) => (
										<Image src={src} maxW="20px" key={src} />
									))}
								</HStack>
							) : (
								<p key={category}>{category}</p>
							)
						)}
					</Box>
				</VStack>
			))}
		</Box>
	);
};
