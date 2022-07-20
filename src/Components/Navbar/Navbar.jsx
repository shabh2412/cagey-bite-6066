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
	SimpleGrid,
	Spacer,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { BsBag, BsHeart, BsPerson } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Myntra_logo.png";
import { IconLink } from "./LinkWithIcon/IconLink";
import "./Navbar.css";
import { NavMenuItem } from "./NavMenuItem/NavMenuItem";
import { SearchBar } from "./SearchBar/SearchBar";

// const menuItemStyling = {
// 	color: "#282c3f",
// 	fontWeight: "500",
// };

export const Navbar = () => {
	return (
		<Box bg={"white"} px="5">
			<Flex py="0" color={"black"} alignItems="center">
				<ChLink as={NavLink} to="/">
					<Image src={logo} maxW="100" />
				</ChLink>
				{/* <AspectRatio maxW="50"></AspectRatio> */}
				<Spacer />
				{/* Menu Items */}
				<Stack
					direction={"row"}
					spacing="2"
					// style={menuItemStyling}
					className="navbar-menu">
					<NavMenuItem path="/men">Men</NavMenuItem>
					<NavMenuItem path="/women">women</NavMenuItem>
					<NavMenuItem path="/kids">kids</NavMenuItem>
					<NavMenuItem path="/home-living">home & living</NavMenuItem>
					<NavMenuItem path="/beauty">beauty</NavMenuItem>
					<NavMenuItem path="/studio">studio</NavMenuItem>
				</Stack>
				{/* <Box border="1px solid teal"></Box> */}
				<Spacer />

				<Box flexGrow={3} bg="gray.100" rounded={"md"}>
					<SearchBar text="Search for products, brands and more..." />
				</Box>
				<Spacer />
				<Stack direction={"row"} mx="2" gap="1">
					<VStack alignContent={"center"} border="1px solid transparent">
						<ChLink
							className="iconLink"
							as={NavLink}
							to="/profile"
							textAlign={"center"}>
							<BsPerson />
							Profile
						</ChLink>
					</VStack>
					<VStack alignContent={"center"} border="1px solid transparent">
						<ChLink className="iconLink" as={NavLink} to="/wishlist">
							<BsHeart />
							Wishlist
						</ChLink>
					</VStack>
					<VStack alignContent={"center"} border="1px solid transparent">
						<ChLink className="iconLink" as={NavLink} to="/bag">
							<BsBag />
							Bag
						</ChLink>
					</VStack>
				</Stack>
			</Flex>
		</Box>
	);
};
