import { SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "../Cards/ProductCard";
import "../Cards/ProductCard.css";

export const ProductsContainer = ({ products = [] }) => {
	return (
		<SimpleGrid spacing="1em" columns={[4]}>
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
