import "./CVBody.scss";
import { PDFViewer, type PDFViewerRef } from "@embedpdf/react-pdf-viewer";
import professionalCVLetter from "../Assets/PDFs/Professional_CV_Letter.pdf";
import { useRef } from "react";

export default function CVBody() {
	const viewerRef = useRef<PDFViewerRef>(null);

	return (
		<>
			<div id="CVBody">
				<PDFViewer
					ref={viewerRef}
					config={{
						documentManager: {
							initialDocuments: [
								{
									url: professionalCVLetter,
									autoActivate: true,
									documentId: "cv-document",
								},
							],
						},
						theme: { preference: "system" },
						disabledCategories: [
							"annotation",
							"print",
							"redaction",
							"tools",
							"history",
							"form",
							"insert",
							"security",
							"shapes",
							"panel-comment",
							"document-open",
							"document-close",
							"document-protect",
						],
					}}
				/>
			</div>
		</>
	);
}
