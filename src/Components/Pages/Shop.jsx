import { Container, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CommonBreadCrumb } from "../Common/BreadCrumb/CommonBreadCrumb";
import { ProductsContainer } from "./ProductsContainer";

export const Shop = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const params = useParams();
	const section = params.section;
	const getData = async () => {
		const url = `https://rishabh-mock-server.herokuapp.com/myntra_db?section=${section}`;
		console.log("fetching data from server");
		setIsLoading(true);
		let data = await fetch(url);
		data = await data.json();
		console.log(data);
		setProducts(data);
		console.log("data fetched successfully from server");
		setIsLoading(false);
		// console.log(data);
	};
	useEffect(() => {
		getData();
	}, [params.section]);

	return (
		<Container maxW="100%">
			<CommonBreadCrumb section={section} shopPage={true} />
			<Heading
				fontSize="md"
				textTransform="capitalize"
				letterSpacing="1.5px"
				mt="3"
				mb="5">
				{params.section}'s fashion store -{" "}
				<span
					style={{
						fontWeight: "lighter",
						color: "grey",
					}}>
					{products.length} items
				</span>
			</Heading>
			{/* Filter heading and sorting functionalitys */}
			<div className="row justify-content-between border-bottom py-2">
				<div className="col-2">
					<Heading fontSize="lg" textTransform="uppercase">
						Filters
					</Heading>
				</div>
				<div className="col-2">Sorting options here </div>
			</div>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<ProductsContainer products={products} />
			)}
		</Container>
	);
};
