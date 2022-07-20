import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Heading,
	HStack,
	Image,
	Link as ChLink,
	LinkBox,
	LinkOverlay,
	Spacer,
	Stack,
	Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Myntra_logo.png";
import "./Navbar.css";
import { NavMenuItem } from "./NavMenuItem";
import { SearchBar } from "./SearchBar";

// const menuItemStyling = {
// 	color: "#282c3f",
// 	fontWeight: "500",
// };

export const Navbar = () => {
	return (
		<Box bg={"white"} px="5">
			<HStack border={"1px solid red"} py="0" color={"black"}>
				<ChLink as={NavLink} to="/">
					<Image src={logo} maxW="100" />
				</ChLink>
				{/* <AspectRatio maxW="50"></AspectRatio> */}
				<Spacer />
				<Box>
					{/* Menu Items */}
					<Stack
						direction={"row"}
						spacing="8"
						// style={menuItemStyling}
						className="navbar-menu">
						<NavMenuItem path="/men">Men</NavMenuItem>
						<NavMenuItem path="/women">women</NavMenuItem>
						<NavMenuItem path="/kids">kids</NavMenuItem>
						<NavMenuItem path="/home-living">home & living</NavMenuItem>
						<NavMenuItem path="/beauty">beauty</NavMenuItem>
						<NavMenuItem path="/studio">studio</NavMenuItem>
					</Stack>
				</Box>
				<Spacer />
				<Box border="1px solid green">
					<SearchBar />
				</Box>
				<Spacer />
				<Text>Profile</Text>
				<Text>Wishlist</Text>
				<Text>Bag</Text>
			</HStack>
		</Box>
	);
};
