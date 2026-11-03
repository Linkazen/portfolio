import "./PortfolioHeader.scss";
import PortfolioIcon from "../Components/PortfolioIcon";
import { FaGithub, FaLinkedin, FaItchIo } from "react-icons/fa";
import { Link } from "react-router-dom";

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
			</div>
			<div id="PageSelectionContainer">
				<Link to="/">
					<button>Portfolio</button>
				</Link>
				<Link to="/cv">
					<button>CV</button>
				</Link>
			</div>
		</section>
	);
}
