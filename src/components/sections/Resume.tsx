import { useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const resumePath = `${import.meta.env.BASE_URL}files/resume.pdf`;
const ASPECT_RATIO = 8.5 / 11;
const MAX_WIDTH = 700;

const downloadPDF = () => {
  const link = document.createElement("a");
  link.href = resumePath;
  link.download = "resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Resume() {
  const [pageWidth, setPageWidth] = useState(700);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;

        const scaledWidth = Math.min(
          clientWidth,
          clientHeight * ASPECT_RATIO,
          MAX_WIDTH
        );

        setPageWidth(scaledWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-full max-w-[800px]" ref={containerRef}>
        <button
          onClick={downloadPDF}
          className="px-4 py-1 border rounded-xl text-(--color-text-inverted) bg-(--color-accent) w-1/2 mx-auto hover:bg-(--color-accent-hover) transition-all duration-150 ease-in-out cursor-pointer mb-4"
        >
          Download
        </button>
        <div className="h-[70vh] overflow-y-auto flex justify-center">
          <Document
            file={resumePath}
            className="react-pdf-document border-2 border-(--color-border)"
          >
            <Page
              width={pageWidth}
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="react-pdf-page"
            />
          </Document>
        </div>
      </div>
    </div>
  );
}
