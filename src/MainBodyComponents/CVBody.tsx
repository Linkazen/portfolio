import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./CVBody.scss";
import { Document, Page } from "react-pdf";
import professionalCVLetter from "../Assets/PDFs/Professional_CV_Letter.pdf";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.mjs",
	import.meta.url,
).toString();

export default function CVBody() {
	return (
		<>
			<div id="CVBody">
				<ErrorBoundary fallback={<p>Failed to load PDF.</p>}>
					<Suspense fallback={<p>Loading document…</p>}>
						<Document file={professionalCVLetter}>
							<Suspense fallback={<p>Loading page...</p>}>
								<Page pageNumber={1} />
							</Suspense>
							<Suspense fallback={<p>Loading page...</p>}>
								<Page pageNumber={2} />
							</Suspense>
						</Document>
					</Suspense>
				</ErrorBoundary>
			</div>
		</>
	);
}
