import { StarIcon } from "@chakra-ui/icons";
import { Heading, Text } from "@chakra-ui/react";
import { Card, CardImg } from "react-bootstrap";
export const ProductCard = ({
	image,
	name,
	brand,
	id,
	rating,
	newPrice,
	oldPrice = "",
}) => {
	return (
		<Card
			onClick={() => {
				alert(`product clicked\n product id : ${id}`);
			}}
			style={{ width: "18rem" }}
			className="rounded-0 border-0">
			<div
				style={{
					position: "relative",
				}}>
				<Card.Img src={image} variant="top" className="rounded-0" />
				<div
					style={{
						position: "absolute",
						bottom: "10px",
						left: "10px",
						backgroundColor: "rgba(255,255,255,0.55)",
						display: "flex",
						alignItems: "center",
						gap: "0.5em",
					}}
					className="px-1 py-1">
					<Text fontSize="xs" fontWeight="bold">
						{rating}
					</Text>
					<StarIcon fontSize="xs" color="teal" />
				</div>
			</div>
			<Card.Body>
				<Heading fontSize="16px">{brand}</Heading>
				<Text fontSize="xs" noOfLines="1">
					{name}
				</Text>
				<div className="d-flex gap-2 align-items-end">
					{/* Current Price */}
					<Text fontSize="14px" fontWeight="bold">
						Rs. {newPrice}
					</Text>
					{/* Original Price */}
					{oldPrice !== 0 && oldPrice !== "" && (
						<>
							<Text
								fontSize="12px"
								fontWeight="light"
								color="grey"
								textDecoration="line-through">
								Rs. {oldPrice}
							</Text>
							{/* % Off */}
							<Text fontSize="12px" color="orange">
								({(((oldPrice - newPrice) * 100) / oldPrice).toFixed(0)} % Off)
							</Text>
						</>
					)}
				</div>
			</Card.Body>
		</Card>
	);
};
