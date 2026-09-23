import type { IconType } from "react-icons";
import "./PortfolioIcon.scss";

type PortfolioIconProps = {
  icon: IconType;
  link: string;
};

const PortfolioIcon = (info: PortfolioIconProps) => {
  return (
    <a href={info.link} target="_blank" rel="noopener noreferrer">
      <info.icon className="PortfolioIcon" />
    </a>
  );
};

export default PortfolioIcon;
