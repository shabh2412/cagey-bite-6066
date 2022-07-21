// import logo from './logo.svg';
// import './App.css';

import { Box } from "@chakra-ui/react";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
	return (
		<Box>
			<Navbar />
			<br />
			<AllRoutes />
			<Footer />
		</Box>
	);
}

export default App;
