import { SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "../Cards/ProductCard";

export const ProductsContainer = ({ products = [] }) => {
	return (
		<SimpleGrid minChildWidth="20%" spacing="1em">
			{products?.map((product) => (
				<ProductCard
					image={product.images[0]}
					brand={product.brand}
					name={product.name}
					oldPrice={product.oldPrice}
					newPrice={product.price}
					id={product.id}
					rating={product.rating}
					key={product.id}
				/>
			))}
		</SimpleGrid>
	);
};
