import { Box } from "@chakra-ui/react";

import "./TextBanner.css";

export const TextBanner = ({ title, subtitle }) => {
	return (
		<Box color="#3e4152">
			<h4>{title}</h4>
      <h4>{subtitle}</h4>
		</Box>
	);
};
