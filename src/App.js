// import logo from './logo.svg';
// import './App.css';

import { Box } from "@chakra-ui/react";
import { Navbar } from "./Components/Navbar/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
	return (
		<Box>
			<Navbar />
			<br/>
			<AllRoutes />
		</Box>
	);
}

export default App;
