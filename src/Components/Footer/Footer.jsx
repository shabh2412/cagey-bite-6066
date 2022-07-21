import {
	Box,
	Container,
	Flex,
	HStack,
	Image,
	Spacer,
	Text,
	VStack,
} from "@chakra-ui/react";
import { FooterColumn } from "./FooterColumn";
import { MyntraPromise } from "./MyntraPromise";

export const Footer = () => {
	const footerLinks = [
		[
			{
				title: "online shopping",
				categories: [
					"men",
					"women",
					"kids",
					"home & living",
					"beauty",
					"gift cards",
					"myntra insider",
				],
			},
			{
				title: "Useful links",
				categories: [
					"blog",
					"careers",
					"site map",
					"corporate info",
					"whitehat",
				],
			},
		],
		[
			{
				title: "customer policies",
				categories: [
					"contact us",
					"faq",
					"t&c",
					"terms of use",
					"track orders",
					"shipping",
					"cancellation",
					"returns",
					"privacy policy",
					"grievance officer",
				],
			},
		],
		[
			{
				title: "experience myntra app on mobile",
				categories: [
					{
						img: [
							"https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png",
							"https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png",
						],
					},
				],
			},
			{
				title: "keep in touch",
				categories: [
					{
						logo: [
							"https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png",
							"https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png",
							"https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png",
							"https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png",
						],
					},
				],
			},
		],
	];
	const myntraPromise = [
		{
			image:
				"https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png",
			heading: "100% Original",
			text: "guarantee for all products at myntra.com",
		},
		{
			image:
				"https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png",
			heading: "Return within 30days",
			text: "of receiving your order",
		},
	];
	return (
		<Box bg="#FAFBFC" py="8">
			<Container maxW="80%">
				<HStack alignItems="flex-start" gap="10">
					{footerLinks?.map((column) => (
						<>
							{/* {console.log(footerLinks)} */}
							<FooterColumn column={column} key={column} />
							{/* {console.log(column)} */}
						</>
					))}
					<MyntraPromise myntraPromise={myntraPromise} />
				</HStack>
			</Container>
		</Box>
	);
};
