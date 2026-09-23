import "./PortfolioBody.scss";
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
              <div>
                <a
                  href="https://www.luware.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/src/Assets/Icons/LuwareIcon.svg"
                    alt="Luware company Icon"
                  />
                </a>
                <h3>
                  <i>2025-Present</i>
                </h3>
                <p>
                  Working as a Junior Software Engineer, primarilly working on
                  both the front-end and back-end of Nimbus.
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
                  title="Some project"
                  description="This is a description of the project."
                  imagePath=""
                  hoverGifPath=""
                  portfolioIcons={[]}
                />
                <ProjectTile
                  title="Some project"
                  description="This is a description of the project."
                  imagePath=""
                  hoverGifPath=""
                  portfolioIcons={[]}
                />
                <ProjectTile
                  title="Some project"
                  description="This is a description of the project."
                  imagePath=""
                  hoverGifPath=""
                  portfolioIcons={[]}
                />
                <ProjectTile
                  title="Some project"
                  description="This is a description of the project."
                  imagePath=""
                  hoverGifPath=""
                  portfolioIcons={[]}
                />
                <ProjectTile
                  title="Some project"
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
        <ProjectSection title="Game Jams" body={<></>} hasBreak={true} />
        <ProjectSection
          title="Personal Projects"
          body={<></>}
          hasBreak={false}
        />
      </section>
    </>
  );
}
