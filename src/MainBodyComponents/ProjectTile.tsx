import "./ProjectTile.scss";
import "./PortfolioIcon";
import React from "react";

type ProjectTileProps = {
  title: string;
  description: string;
  imagePath: string;
  hoverGifPath: string;
  portfolioIcons: React.ReactElement[]; // Should be an array of PortfolioIcon elements.
};

export default function ProjectTile({
  title,
  description,
  imagePath,
  hoverGifPath,
  portfolioIcons,
}: ProjectTileProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      <div
        id="ProjectTileContainer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <img src={hoverGifPath} alt={title} />
        ) : (
          <img src={imagePath} alt={title} />
        )}

        <h4>{title}</h4>
        <p>{description}</p>
        <div id="PortfolioIconsContainer">{portfolioIcons}</div>
      </div>
    </>
  );
}
