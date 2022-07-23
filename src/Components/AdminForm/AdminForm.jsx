import {
	Button,
	Container,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
	Select,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export const categories = [
	"tshirt",
	"jeans",
	"jackets",
	"innerwear",
	"sportswear",
	"formals",
];

const initData = {
	name: "",
	brand: "",
	oldPrice: "",
	price: "",
	category: "",
	section: "",
	color: "",
	images: [],
	description: "",
};
export const AdminForm = () => {
	const [formData, setFormData] = useState(initData);
	const handleChange = (e) => {
		let { value, type, name } = e.target;
		// console.log(name, value);
		type === "number" ? (value = +value) : (value = value);
		setFormData({
			...formData,
			[name]: name === "images" ? value.split(" ") : value,
		});
	};
	const postData = async (data) => {
		let response = await fetch("http://127.0.0.1:3000/myntra_db", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		console.log(data);
		response = await response.json();
		console.log(response);
	};
	const handleSubmit = () => {
		for (let key in formData) {
			if (key === "oldPrice") continue;
			if (formData[key] === "" || formData[key].length === 0) {
				console.log(key);
				alert("Please fill all details");
				return;
			}
		}
		postData(formData).then(() => {
			setFormData(initData);
			alert("Form Submitted!");
			ref.current.focus();
		});
	};

	const ref = useRef(null);

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	return (
		<Container
			// bgGradient="linear(to-br, hotpink, orange)"
			border="1px solid black"
			rounded="md"
			p="5">
			<Heading color="black" textAlign="center">
				Add Products
			</Heading>
			<form>
				{/* brand */}
				<FormControl my="5">
					{/* <FormLabel>Item Name</FormLabel> */}
					<Input
						ref={ref}
						name="brand"
						type="text"
						placeholder="Item Brand"
						value={formData.brand}
						onChange={(e) => {
							handleChange(e);
						}}
					/>
				</FormControl>
				{/* name */}
				<FormControl my="5">
					{/* <FormLabel>Item Name</FormLabel> */}
					<Input
						name="name"
						type="text"
						placeholder="Item Name"
						value={formData.name}
						onChange={(e) => {
							handleChange(e);
						}}
					/>
				</FormControl>
				{/* old price */}
				<FormControl my="5">
					{/* <FormLabel>Item Name</FormLabel> */}
					<Input
						name="oldPrice"
						type="number"
						placeholder="Original Price"
						value={formData.oldPrice === 0 ? "" : formData.oldPrice}
						onChange={(e) => {
							handleChange(e);
						}}
					/>
				</FormControl>
				{/* price */}
				<FormControl my="5">
					{/* <FormLabel>Item Name</FormLabel> */}
					<Input
						name="price"
						type="number"
						placeholder="Item Price"
						value={formData.price === 0 ? "" : formData.price}
						onChange={(e) => {
							handleChange(e);
						}}
					/>
				</FormControl>
				{/* color */}
				<FormControl my="5">
					{/* <FormLabel>Item Name</FormLabel> */}
					<Input
						name="color"
						type="text"
						placeholder="Item color"
						value={formData.color}
						onChange={(e) => {
							handleChange(e);
						}}
					/>
				</FormControl>
				{/* description */}
				<FormControl my="5">
					{/* <FormLabel>Item Name</FormLabel> */}
					<Input
						name="description"
						type="text"
						placeholder="Item description"
						value={formData.description}
						onChange={(e) => {
							handleChange(e);
						}}
					/>
				</FormControl>
				{/* images */}
				<FormControl my="5">
					{/* <FormLabel>Item Name</FormLabel> */}
					<Input
						name="images"
						type="text"
						placeholder="Item Images (separated by comma)"
						value={formData.images.join(" ")}
						onChange={(e) => {
							handleChange(e);
						}}
					/>
				</FormControl>
				{/* category */}
				<FormControl my="5">
					{/* <FormLabel>Item Name</FormLabel> */}
					<Select
						name="category"
						type="select"
						placeholder="Select Category"
						value={formData.category}
						textTransform="capitalize"
						onChange={(e) => {
							handleChange(e);
						}}>
						{categories.map((category) => (
							<option value={category}>{category}</option>
						))}
					</Select>
				</FormControl>
				{/* section */}
				<FormControl my="5">
					{/* <FormLabel>Item Name</FormLabel> */}
					<Select
						name="section"
						type="select"
						placeholder="Select Gender"
						value={formData.section}
						onChange={(e) => {
							handleChange(e);
						}}>
						<option value="men">Men</option>
						<option value="women">Women</option>
						<option value="kids">Kids</option>
					</Select>
				</FormControl>
				<Flex my="5">
					<Button
						mx="auto"
						colorScheme="pink"
						variant="outline"
						onClick={handleSubmit}>
						Submit
					</Button>
				</Flex>
			</form>
		</Container>
	);
};

// SAMPLE QUERY
// http://127.0.0.1:3000/myntra_db?color=black&_sort=price&_order=ASC&brand=WROGN
