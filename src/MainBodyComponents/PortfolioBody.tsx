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
									description="Made for my Professional Project at Abertay University. This game is a multiplayer co-op party game, where you and a friend repair ships whilst dealing with and repairing malfunctions on your space station."
									imagePath="/src/Assets/Images/GalacticGaragePoster.png"
									hoverGifPath=""
									portfolioIcons={[
										<PortfolioIcon
											icon={FaItchIo}
											link="https://zero-bounds-studios.itch.io/galactic-garage"
										/>,
									]}
								/>
								<ProjectTile
									title="World Machine"
									description="This is a DirectX11 engine made for the Game Engine Development module at Abertay University. It's created in C++, with working reflection, level editor, and integrates Jolt Physics for physics simulations."
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
									imagePath="src/Assets/Images/BornToKrillCover.png"
									hoverGifPath=""
									portfolioIcons={[
										<PortfolioIcon
											icon={FaGithub}
											link="https://github.com/Linkazen/GlobalGameJam2025"
										/>,
										<PortfolioIcon
											icon={FaItchIo}
											link="https://aronagox.itch.io/born-to-krill"
										/>,
									]}
								/>
								<ProjectTile
									title="Sincantation"
									description=""
									imagePath="src/Assets/Images/SincantationCover.png"
									hoverGifPath=""
									portfolioIcons={[
										<PortfolioIcon
											icon={FaGithub}
											link="https://github.com/Serpendio/2-too-many-jam"
										/>,
										<PortfolioIcon
											icon={FaItchIo}
											link="https://jowsey.itch.io/sincantation"
										/>,
									]}
								/>
								<ProjectTile
									title="Breathing Space"
									description=""
									imagePath="src/Assets/Images/BreathingSpaceCover.png"
									hoverGifPath=""
									portfolioIcons={[
										<PortfolioIcon
											icon={FaGithub}
											link="https://github.com/Linkazen/FiniteSpaceJam"
										/>,
										<PortfolioIcon
											icon={FaItchIo}
											link="https://linkazen.itch.io/breathing-space"
										/>,
									]}
								/>
								<ProjectTile
									title="Speed Lich"
									description=""
									imagePath="src/Assets/Images/SpeedLichCover.png"
									hoverGifPath=""
									portfolioIcons={[
										<PortfolioIcon
											icon={FaGithub}
											link="https://github.com/Linkazen/halloweengamejam2024"
										/>,
										<PortfolioIcon
											icon={FaItchIo}
											link="https://linkazen.itch.io/speedlich"
										/>,
									]}
								/>
							</div>
						</>
					}
					hasBreak={true}
				/>
				<ProjectSection
					title="Personal Projects & Open Source Contributions"
					body={
						<>
							<div className="ProjectsDiv">
								<ProjectTile
									title="Niko Engine"
									description=""
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
									title="Kando"
									description=""
									imagePath="src/Assets/Images/icon.png"
									hoverGifPath=""
									portfolioIcons={[
										<PortfolioIcon
											icon={FaGithub}
											link="https://github.com/kando-menu/kando"
										/>,
									]}
								/>
							</div>
						</>
					}
					hasBreak={false}
				/>
			</section>
		</>
	);
}
