import "./PortfolioBody.scss";
import { FaGithub, FaItchIo, FaReact } from "react-icons/fa6";
import PortfolioIcon from "./PortfolioIcon";
import ProjectSection from "./ProjectSection";
import ProjectTile from "./ProjectTile";
import { SiGodotengine, SiSfml, SiTypescript, SiUnity } from "react-icons/si";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";

import luwareIcon from "../Assets/Icons/LuwareIcon.svg";
import beatDownCover from "../Assets/Images/BeatDown.png";
import bornToKrillCover from "../Assets/Images/BornToKrillCover.png";
import breathingSpaceCover from "../Assets/Images/BreathingSpaceCover.png";
import graphicsCover from "../Assets/Images/CMP301Graphics.png";
import galacticGarageCover from "../Assets/Images/GalacticGaragePoster.png";
import kandoCover from "../Assets/Images/kandoIcon.png";
import nikoEngineCover from "../Assets/Images/NikoEngine.png";
import oneInAKrillionCover from "../Assets/Images/OneInAKrillion.png";
import sincantationCover from "../Assets/Images/SincantationCover.png";
import speedLichCover from "../Assets/Images/SpeedLichCover.png";
import worldMachineCover from "../Assets/Images/WorldMachineScreenShot.png";

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
									<img src={luwareIcon} alt="Luware Company Icon" />
								</a>
								<h3>
									<i>2025-Present</i>
								</h3>
								<div id="WorkExperienceIconContainer">
									<TbBrandCSharp />
									<SiTypescript />
								</div>
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
									yearReleased="2026"
									toolsUsed={[<SiGodotengine />]}
									description="Made for my Professional Project at Abertay University. This game is a multiplayer co-op party game, where you and a friend repair ships whilst dealing with and repairing malfunctions on your space station."
									imagePath={galacticGarageCover}
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
									yearReleased="2025"
									toolsUsed={[<TbBrandCpp />]}
									description="This is a DirectX11 engine made for the Game Engine Development module at Abertay University. With working reflection, level editor, and integrates Jolt Physics for physics simulations."
									imagePath={worldMachineCover}
									hoverGifPath=""
									portfolioIcons={[
										<PortfolioIcon
											icon={FaGithub}
											link="https://github.com/Linkazen/WorldMachine"
										/>,
									]}
								/>
								<ProjectTile
									title="CMP 301 DX11 Graphics Project"
									yearReleased="2025"
									toolsUsed={[<TbBrandCpp />]}
									description="This is a project showcases different DirectX11 rendering techniques and features. Such as, lighting and shadows, post processing effects, and tesselation techniques."
									imagePath={graphicsCover}
									hoverGifPath=""
									portfolioIcons={[]}
								/>
								<ProjectTile
									title='CMP 208 "One in a Krillion"'
									yearReleased="2025"
									toolsUsed={[<TbBrandCpp />]}
									description="This game is a PC/PS5 cross-platform Hotline Miami inspired deck building rogue-lite. Created with the team One in a Krillion for CMP 208 - Game Programming and System Architectures."
									imagePath={oneInAKrillionCover}
									hoverGifPath=""
									portfolioIcons={[]}
								/>
								<ProjectTile
									title="BeatDown"
									toolsUsed={[<TbBrandCpp />, <SiSfml />]}
									yearReleased="2024"
									description="This is a rhythm fighting game, where you must time attacks to the beat in order to damage your opponents. With multiplayer mode and a singleplayer arcade mode."
									imagePath={beatDownCover}
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
									yearReleased="2025"
									toolsUsed={[<SiUnity />, <TbBrandCSharp />]}
									description="In this game you take control of a krill battling an octopus. Inspired by Cuphead, this game was made for the 48 hour Global Game Jam 2025."
									imagePath={bornToKrillCover}
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
									yearReleased="2024"
									toolsUsed={[<SiUnity />, <TbBrandCSharp />]}
									description="This game is a roguelike where you can mix and match spells and battle enemies as you make your way through a dungeon. Made for the weeklong Two to One jam."
									imagePath={sincantationCover}
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
									yearReleased="2024"
									toolsUsed={[<SiGodotengine />]}
									description="Use cameras to look for and avoid a monster, all while fixing your spaceship from deadly leaks. Created for the AGDS 2024 Freshers Jam."
									imagePath={breathingSpaceCover}
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
									yearReleased="2024"
									toolsUsed={[<SiGodotengine />]}
									description="A fast paced movement shooter, that incentivizes speed. Created for the 2024 Halloween AGDS Game Jam"
									imagePath={speedLichCover}
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
									yearReleased="2025"
									toolsUsed={[<TbBrandCpp />]}
									description="A Vulkan based cross-platform rendering engine, featuring model loading and basic controls with ImGui."
									imagePath={nikoEngineCover}
									hoverGifPath=""
									portfolioIcons={[
										<PortfolioIcon
											icon={FaGithub}
											link="https://github.com/Linkazen/NikoEngine"
										/>,
									]}
								/>
								<ProjectTile
									title="Kando"
									yearReleased="Present"
									toolsUsed={[<FaReact />, <SiTypescript />]}
									description="A desktop productivity menu, powered by Electron."
									imagePath={kandoCover}
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
