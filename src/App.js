// import logo from './logo.svg';
// import './App.css';

import { Box, Heading } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
	return (
		<Box>
			<Navbar />
			<AllRoutes />
		</Box>
	);
}

export default App;
