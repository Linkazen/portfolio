import "./PortfolioHeader.scss";
import PortfolioIcon from "./MainBodyComponents/PortfolioIcon";
import { FaGithub, FaLinkedin, FaItchIo } from "react-icons/fa";

export default function PortfolioHeader() {
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
				{/*<PortfolioIcon icon={PiReadCvLogo} link="" />*/}
			</div>
		</section>
	);
}
