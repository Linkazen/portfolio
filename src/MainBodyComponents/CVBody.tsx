import "./CVBody.scss";
import professionalCVLetter from "../Assets/PDFs/Professional_CV_Letter.pdf";

export default function CVBody() {
  return (
    <>
      <div id="CVBody">
        <a
          id="DownloadButtonLink"
          href={professionalCVLetter}
          download="Jonathan-Hurst-CV"
          target="_blank"
          rel="noreferrer"
        >
          <button id="DownloadCVButton">Download CV</button>
        </a>
        <embed src={professionalCVLetter} />
      </div>
    </>
  );
}
