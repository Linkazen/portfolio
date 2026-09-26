import "./ProjectTile.scss";
import "./PortfolioIcon";
import React from "react";

type ProjectTileProps = {
	title: string;
	yearReleased: string;
	toolsUsed: React.ReactElement[]; // Icons specifying which tools were used in the creation of the project
	description: string;
	imagePath: string;
	hoverGifPath: string;
	portfolioIcons: React.ReactElement[]; // Should be an array of PortfolioIcon elements.
};

export default function ProjectTile({
	title,
	yearReleased,
	toolsUsed,
	description,
	imagePath,
	hoverGifPath,
	portfolioIcons,
}: ProjectTileProps) {
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<>
			<div id="ProjectTileContainer" className="ProjectTileContainer">
				<div
					id="TileImgContainer"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					{isHovered && hoverGifPath != "" ? (
						<img src={hoverGifPath} alt={title} />
					) : (
						<img src={imagePath} alt={title} />
					)}
				</div>
				<div id="TileTextContainer">
					<div id="ProjectInfoContainer">
						<h4>{title}</h4>
						<h4>{yearReleased}</h4>
						<div id="ToolsUsedContainer">{toolsUsed}</div>
					</div>
					<p>{description}</p>
					<div id="PortfolioIconsContainer">{portfolioIcons}</div>
				</div>
			</div>
		</>
	);
}
