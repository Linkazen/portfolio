import PortfolioBody from "./MainBodyComponents/PortfolioBody";
import PortfolioHeader from "./PortfolioHeader";
import "./App.scss";

function App() {
  return (
    <>
      <PortfolioHeader />
      <PortfolioBody />
      <div id="VideoContainer">
        <video autoPlay loop muted id="BackgroundVideo">
          <source
            src="/src/Assets/Videos/PublicDomainTestVideo.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}

export default App;
