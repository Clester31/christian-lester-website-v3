import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const downloadPDF = () => {
  const link = document.createElement("a");
  link.href = "/files/resume.pdf";
  link.download = "resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Resume() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col">
        <button
          onClick={downloadPDF}
          className="px-4 py-1 border rounded-xl text-(--color-text-inverted) bg-(--color-accent) w-1/2 mx-auto hover:bg-(--color-accent-hover) transition-all duration-150 ease-in-out cursor-pointer mb-4"
        >
          Download
        </button>
        <Document file="/files/resume.pdf" className="react-pdf-document mb-8">
          <Page
            pageNumber={1}
            width={700}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="react-pdf-page"
          />
        </Document>
      </div>
    </div>
  );
}
