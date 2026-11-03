import PortfolioBody from "./MainBodyComponents/PortfolioBody";
import PortfolioHeader from "./MainBodyComponents/PortfolioHeader";
import "./App.scss";
import CVBody from "./MainBodyComponents/CVBody";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<PortfolioHeader />

			<Routes>
				<Route path="/" element={<PortfolioBody />} />
				<Route path="/cv" element={<CVBody />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
