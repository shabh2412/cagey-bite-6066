// export const HeroSlider = () => {
//   return (

import { Flex, Box, HStack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

//   )
// }

export const Carousel = ({
	slides = [
		{
			img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		},
		{
			img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		},
		{
			img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
		},
		{
			img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		},
		{
			img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		},
	],
}) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slidesCount = slides.length;

	const setSlide = (slide) => {
		setCurrentSlide(slide);
	};

	const carouselStyle = {
		transition: "all .5s",
		ml: `-${currentSlide * 100}%`,
	};
	useEffect(() => {
		let id = setInterval(() => {
			setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
		}, 2500);
		const cleanup = () => {
			console.log("performing cleanup on herolider");
			clearInterval(id);
		};
		return cleanup;
	}, []);
	return (
		<Flex w="full" alignItems="center" justifyContent="center" mb="10" mt="5">
			<Flex w="full" pos="relative" overflow="hidden">
				<Flex w="full" {...carouselStyle}>
					{slides.map((slide, sid) => (
						<Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
							<Image
								src={slide}
								alt="carousel image"
								boxSize="full"
								backgroundSize="cover"
							/>
						</Box>
					))}
				</Flex>
				<HStack
					justify="center"
					pos="absolute"
					bottom="10px"
					w="full"
					zIndex="100">
					{Array.from({
						length: slidesCount,
					}).map((_, slide) => (
						<Box
							key={`dots-${slide}`}
							cursor="pointer"
							boxSize={["7px", null, "10px"]}
							m="0 2px"
							bg={currentSlide === slide ? "black" : "gray"}
							// border="0.25px solid gray"
							// opacity={currentSlide === slide ? "1" : "0.25"}
							rounded="50%"
							display="inline-block"
							transition="background-color 0.6s ease"
							_hover={{
								bg: "black",
							}}
							onClick={() => setSlide(slide)}></Box>
					))}
				</HStack>
			</Flex>
		</Flex>
	);
};
