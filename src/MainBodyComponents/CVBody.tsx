import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./CVBody.scss";
import professionalCVLetter from "../Assets/PDFs/Professional_CV_Letter.pdf";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.mjs",
	import.meta.url,
).toString();

export default function CVBody() {
	return (
		<>
			<div id="CVBody">
				<a
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
