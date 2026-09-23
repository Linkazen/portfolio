import { FaGithub, FaItchIo } from "react-icons/fa6";
import "./PortfolioBody.scss";
import PortfolioIcon from "./PortfolioIcon";
import ProjectSection from "./ProjectSection";
import ProjectTile from "./ProjectTile";

export default function PortfolioBody() {
	return (
		<>
			<section id="portfolioBody">
				<ProjectSection
					title="Work Experience"
					body={
						<>
							<div id="WorkExperienceDiv">
								<a
									href="https://www.luware.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/src/Assets/Icons/LuwareIcon.svg"
										alt="Luware Company Icon"
									/>
								</a>
								<h3>
									<i>2025-Present</i>
								</h3>
								<p>
									Working as a Junior Software Engineer, primarily on Nimbus.
								</p>
							</div>
						</>
					}
					hasBreak={true}
				/>
				<ProjectSection
					title="University Projects"
					body={
						<>
							<div className="ProjectsDiv">
								<ProjectTile
									title="Galactic Garage"
									description="Made for our Professional Project at Abertay University. This game is a multiplayer co-op party game, where you and a friend repair ships whilst dealing with and repairing malfunctions on your space station."
									imagePath="/src/Assets/Images/GalacticGaragePoster.png"
									hoverGifPath="/src/Assets/Gifs/PlaceholderGif.gif"
									portfolioIcons={[
										<PortfolioIcon
											icon={FaItchIo}
											link="https://zero-bounds-studios.itch.io/galactic-garage"
										/>,
									]}
								/>
								<ProjectTile
									title="World Machine"
									description="This is a game engine made for the Game Engine Development module at Abertay University. It's primarily created in C++, with working reflection, level editor, and integrates Jolt Physics for physics simulations."
									imagePath=""
									hoverGifPath=""
									portfolioIcons={[
										<PortfolioIcon
											icon={FaGithub}
											link="https://github.com/Linkazen/WorldMachine"
										/>,
									]}
								/>
								<ProjectTile
									title="Graphics Project"
									description="This is a description of the project."
									imagePath=""
									hoverGifPath=""
									portfolioIcons={[]}
								/>
								<ProjectTile
									title="CMP 208 One in a Krillion"
									description="This is a description of the project."
									imagePath=""
									hoverGifPath=""
									portfolioIcons={[]}
								/>
								<ProjectTile
									title="BeatDown"
									description="This is a description of the project."
									imagePath=""
									hoverGifPath=""
									portfolioIcons={[]}
								/>
							</div>
						</>
					}
					hasBreak={true}
				/>
				<ProjectSection
					title="Game Jams"
					body={
						<>
							<div className="ProjectsDiv">
								<ProjectTile
									title="Born to Krill"
									description=""
									imagePath=""
									hoverGifPath=""
									portfolioIcons={[]}
								/>
								<ProjectTile
									title="Sincantation"
									description=""
									imagePath=""
									hoverGifPath=""
									portfolioIcons={[]}
								/>
								<ProjectTile
									title="Breathing Space"
									description=""
									imagePath=""
									hoverGifPath=""
									portfolioIcons={[]}
								/>
								<ProjectTile
									title="Speed Lich"
									description=""
									imagePath=""
									hoverGifPath=""
									portfolioIcons={[]}
								/>
							</div>
						</>
					}
					hasBreak={true}
				/>
				<ProjectSection
					title="Personal Projects"
					body={
						<>
							<ProjectTile
								title="Niko Engine"
								description=""
								imagePath=""
								hoverGifPath=""
								portfolioIcons={[]}
							/>
						</>
					}
					hasBreak={false}
				/>
			</section>
		</>
	);
}
