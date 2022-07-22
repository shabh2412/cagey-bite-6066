import {
	Breadcrumb,
	BreadcrumbLink,
	BreadcrumbItem,
	Link as ChLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const CommonBreadCrumb = ({ section, shopPage = false }) => {
	return (
		<Breadcrumb>
			<BreadcrumbItem>
				<BreadcrumbLink>
					<ChLink as={Link} to="/">
						Home
					</ChLink>
				</BreadcrumbLink>
			</BreadcrumbItem>
			{shopPage && (
				<BreadcrumbItem>
					<BreadcrumbLink>
						<ChLink as={Link} to="/shop">
							Shop
						</ChLink>
					</BreadcrumbLink>
				</BreadcrumbItem>
			)}
			<BreadcrumbItem>
				<BreadcrumbLink href="#" isCurrentPage textTransform="capitalize">
					{section}
				</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
};
