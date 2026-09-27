import "./CVBody.scss";
import { PDFViewer } from "@embedpdf/react-pdf-viewer";
import professionalCVLetter from "../Assets/PDFs/Professional_CV_Letter.pdf";

export default function CVBody() {
	return (
		<div id="CVBody">
			<PDFViewer
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
					],
				}}
			/>
		</div>
	);
}
