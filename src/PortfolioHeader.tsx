import "./PortfolioHeader.scss";
import PortfolioIcon from "./MainBodyComponents/PortfolioIcon";
import { FaGithub, FaLinkedin, FaItchIo } from "react-icons/fa";
import { Layouts } from "./Types/Layouts";

type PortfolioHeaderProps = {
	setActiveLayout: React.Dispatch<React.SetStateAction<number>>;
};

export default function PortfolioHeader({
	setActiveLayout,
}: PortfolioHeaderProps) {
	return (
		<section id="portfolioHeader">
			<h1>Jonathan Hurst</h1>
			<p>Game Engine Developer | Software Engineer</p>
			<div id="SocialIconsContainer">
				<PortfolioIcon icon={FaGithub} link="https://github.com/Linkazen" />
				<PortfolioIcon
					icon={FaLinkedin}
					link="https://www.linkedin.com/in/jonathan-hurst-ba82702b2/"
				/>
				<PortfolioIcon icon={FaItchIo} link="https://linkazen.itch.io/" />
			</div>
			<div id="PageSelectionContainer">
				<button onClick={() => setActiveLayout(Layouts.PORTFOLIO)}>
					Portfolio
				</button>
				<button onClick={() => {
					setActiveLayout(Layouts.CV);
					
				}}>CV</button>
			</div>
		</section>
	);
}
