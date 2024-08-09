import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../assets/Resume-BushraNaeem.pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center
     gap-5 pt-40 pb-16 sm:pb-30 px-5 lg:px-28"
    >
      <a
        href={pdf}
        target="_blank"
        download={Resume}
        rel="noopener noreferrer"
        className="flex gap-1 text-white bg-purple-700 rounded-md py-2 px-3 md:py-2 md:px-20 text-xs md:text-sm lg:text-lg"
      >
        <AiOutlineDownload className="mt-1" />
        Download CV
      </a>
      <div className="flex justify-center items-center">
        <Document file={pdf} className="overflow-hidden">
          <Page pageIndex={0} scale={width > 786 ? 1.6 : 0.6} />
        </Document>
      </div>
    </section>
  );
}
