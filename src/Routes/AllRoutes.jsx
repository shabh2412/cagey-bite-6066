import { Route, Routes } from "react-router-dom";
import { AdminForm } from "../Components/AdminForm/AdminForm";
import { Home } from "../Components/Home/Home";
import { menuItems } from "../Components/Navbar/Navbar";
import { Shop } from "../Components/Pages/Shop";

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			{/* <Route path="/men" element={<h1>Men</h1>} /> */}
			<Route path="/shop/:section" element={<Shop />} />
			{/* {menuItems?.map(({ title, path }) => (
				<>
					<Route
						key={title}
						path={`shop/${path}`}
						element={
							<h1
								style={{
									color: "black",
								}}>
								shop {title}
								{console.log(path)}
							</h1>
						}
					/>
					<Route
						key={title + 1}
						path={`/${path}`}
						element={<h1>Hi {path}</h1>}
					/>
				</>
			))} */}
			<Route path="/admin" element={<AdminForm />} />
		</Routes>
	);
};
