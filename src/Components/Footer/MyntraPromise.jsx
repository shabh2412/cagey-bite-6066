import { Flex, Image, Text, VStack } from "@chakra-ui/react";

export const MyntraPromise = ({ myntraPromise = [] }) => {
	return (
		<VStack>
			{myntraPromise?.map(({ image, heading, text }) => (
				<Flex my="5" width="250px" key={heading + text}>
					<Image src={image} width="48px" height="40px" />
					<Text>
						<span
							style={{
								fontWeight: "600",
								fontSize: "16px",
								textTransform: "uppercase",
							}}>
							{heading}
						</span>{" "}
						<span
							style={{
								fontSize: "14px",
								color: "#696b79",
							}}>
							{text}
						</span>
					</Text>
				</Flex>
			))}
		</VStack>
	);
};
