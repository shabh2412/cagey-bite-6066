import {
	Box,
	Flex,
	Image,
	Link as ChLink,
	Spacer,
	Stack,
	VStack,
} from "@chakra-ui/react";
import { BsBag, BsHeart, BsPerson } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Myntra_logo.png";
import "./Navbar.css";
import { NavMenuItem } from "./NavMenuItem/NavMenuItem";
import { SearchBar } from "./SearchBar/SearchBar";

// const menuItemStyling = {
// 	color: "#282c3f",
// 	fontWeight: "500",
// };

export const menuItems = [
	{
		title: "Men",
		path: "/men",
	},
	{
		title: "women",
		path: "/women",
	},
	{
		title: "kids",
		path: "/kids",
	},
	{
		title: "home & living",
		path: "home-living",
	},
	{
		title: "beauty",
		path: "beauty",
	},
	{
		title: "studio",
		path: "studio",
	},
];

export const Navbar = () => {
	return (
		<Box
			bg={"white"}
			px="5"
			width={"100%"}
			position="sticky"
			top={0}
			boxShadow="rgba(0, 0, 0, 0.08) 0px 4px 12px;">
			<Flex
				py="3"
				color={"black"}
				alignItems="center"
				flexWrap={"wrap"}
				gap="1em"
				boxSizing="border-box">
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
					{menuItems?.map(({ title, path }) => (
						<NavMenuItem path={path}>{title}</NavMenuItem>
					))}
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
