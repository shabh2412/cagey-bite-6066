import { Route, Routes } from "react-router-dom";

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<h1>Home</h1>} />
			<Route path="/men" element={<h1>Men</h1>} />
		</Routes>
	);
};
