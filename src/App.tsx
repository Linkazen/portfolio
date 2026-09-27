import PortfolioBody from "./MainBodyComponents/PortfolioBody";
import PortfolioHeader from "./PortfolioHeader";
import "./App.scss";
import React, { useState } from "react";
import CVBody from "./MainBodyComponents/CVBody";
import { Layouts } from "./Types/Layouts";

function App() {
	const [activeLayout, setActiveLayout] = useState(Layouts.PORTFOLIO);

	function renderLayout(): React.JSX.Element {
		switch (activeLayout) {
			case Layouts.PORTFOLIO:
				return <PortfolioBody />;
			case Layouts.CV:
				return <CVBody />;
			default:
				return <PortfolioBody />;
		}
	}

	return (
		<>
			<PortfolioHeader setActiveLayout={setActiveLayout} />
			{renderLayout()}
			<div id="VideoContainer">
				<img
					src="src/Assets/Videos/FacesBounce.webp"
					id="BackgroundVideo"
				></img>
			</div>
		</>
	);
}

export default App;
