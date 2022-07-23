import { Box, Checkbox, Container, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { categories } from "../AdminForm/AdminForm";
import { CommonBreadCrumb } from "../Common/BreadCrumb/CommonBreadCrumb";
import { ProductsContainer } from "./ProductsContainer";

import "./Filter.css";

export const Shop = () => {
	const [products, setProducts] = useState([]);

	// params and query params
	const [isLoading, setIsLoading] = useState(false);
	const params = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const [color, setColor] = useState(searchParams.get("color"));
	const [brand, setBrand] = useState(searchParams.get("brand"));
	const [category, setcategory] = useState(searchParams.get("category"));
	const firstLoad = useRef();

	const [brands, setBrands] = useState([]);
	const [colors, setColors] = useState([]);

	const handleFilterUpdate = (e) => {
		const { name, value, checked } = e.target;
		if (checked) {
			switch (name) {
				case "category":
					setcategory(value);
					return;
				case "brand":
					setBrand(value);
					return;
				case "color":
					setColor(value);
					return;
				default:
					return;
			}
		} else {
			switch (name) {
				case "category":
					setcategory("");
					return;
				case "brand":
					setBrand("");
					return;
				case "color":
					setColor("");
					return;
				default:
					return;
			}
		}
	};

	const section = params.section;

	const initialiseBrandsAndColors = (data) => {
		let brandsObj = {};
		let colorsObj = {};
		data.forEach((item) => {
			brandsObj[item.brand] = "1";
			colorsObj[item.color] = "1";
		});
		const brandsArr = [];
		const colorsArr = [];
		for (let key in brandsObj) {
			brandsArr.push(key);
		}
		setBrands(brandsArr);
		for (let key in colorsObj) {
			colorsArr.push(key);
		}
		setColors(colorsArr);
		firstLoad.current = false;
	};
	const getData = async () => {
		const url = `https://rishabh-mock-server.herokuapp.com/myntra_db?section=${section}${
			color ? "&color=" + color : ""
		}${brand ? "&brand=" + brand : ""}${
			category ? "&category=" + category : ""
		}`;
		// console.log("color: " + color);
		console.log("url:", url);
		console.log("fetching data from server");
		setIsLoading(true);
		let data = await fetch(url);
		data = await data.json();
		console.log(data);
		setProducts(data);
		if (firstLoad.current) {
			initialiseBrandsAndColors(data);
		}
		console.log("data fetched successfully from server");
		setIsLoading(false);
		// console.log(data);
	};
	// useEffect();
	// useEffect(() => {
	// 	getData().then(() => {
	// 		initialiseBrandsAndColors(products);
	// 	});
	// });
	useEffect(() => {
		console.log(params);

		setSearchParams({
			category: category || "",
			brand: brand || "",
			color: color || "",
		});

		// if (category) {
		// }
		// setSearchParams(category);
		// console.log(color);
		getData();
	}, [params.section, brand, category, color]);
	useEffect(() => {
		firstLoad.current = true;
	}, []);

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
					<Box>
						<Heading fontSize="lg" textTransform="uppercase">
							Filters
						</Heading>
					</Box>
				</div>
				<div className="col-2">Sorting options here </div>
			</div>
			<div className="row">
				<div className="col-2 border-end p-0">
					<div className="border-top border-bottom border-end ps-3 pb-2">
						<Text py="3">Categories</Text>
						<div>
							{/* Categories Section */}
							{categories.map((ctg) => (
								<Box>
									<Checkbox
										isChecked={ctg === category}
										name="category"
										key={ctg}
										value={ctg}
										textTransform="capitalize"
										onChange={(e) => {
											handleFilterUpdate(e);
										}}>
										{ctg}
									</Checkbox>
								</Box>
							))}
						</div>
					</div>
					<div className="border-top border-bottom border-end ps-3 pb-2">
						<Text py="3">Brands</Text>
						<div>
							{/* Categories Section */}
							{brands.map((ctg) => (
								<Box>
									<Checkbox
										isChecked={ctg === brand}
										name="brand"
										key={ctg}
										value={ctg}
										textTransform="capitalize"
										onChange={(e) => {
											handleFilterUpdate(e);
										}}>
										{ctg}
									</Checkbox>
								</Box>
							))}
						</div>
					</div>
					<div className="border-top border-bottom border-end ps-3 pb-2">
						<Text py="3">Colors</Text>
						<div>
							{/* Categories Section */}
							{colors.map((ctg) => (
								<Box>
									<Checkbox
										isChecked={ctg === color}
										name="color"
										key={ctg}
										value={ctg}
										textTransform="capitalize"
										onChange={(e) => {
											handleFilterUpdate(e);
										}}>
										{ctg}
									</Checkbox>
								</Box>
							))}
						</div>
					</div>
				</div>
				<div className="col">
					{isLoading ? (
						<p>Loading...</p>
					) : (
						<ProductsContainer products={products} />
					)}
				</div>
			</div>
		</Container>
	);
};
