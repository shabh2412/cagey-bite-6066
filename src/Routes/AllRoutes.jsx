import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import { menuItems } from "../Components/Navbar/Navbar";

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			{/* <Route path="/men" element={<h1>Men</h1>} /> */}
			{menuItems?.map(({ title, path }) => (
				<Route
					path={path}
					element={
						<h1
							style={{
								color: "black",
							}}>
							{title}
						</h1>
					}
				/>
			))}
		</Routes>
	);
};
