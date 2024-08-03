import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export function Dropzone({ file, setFile, text, setText }) {
  //const [file, setFile] = useState();
  //const [text, setText] = useState();
  const [isVisible, setIsVisible] = useState(true);
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles[0]) {
      setFile(acceptedFiles[0]);
      extractTextFromPDF(acceptedFiles[0]);
      setIsVisible(false);
    }
  }, []);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    maxFiles: 1,
    maxSize: 2000000,
    onDrop,
  });
  const handleCleanInput = () => {
    acceptedFiles.shift();
    setIsVisible(true);
    setText("");
  };

  async function extractTextFromPDF(file) {
    const reader = new FileReader();

    reader.onload = async function () {
      const typedarray = new Uint8Array(this.result);

      const pdf = await pdfjs.getDocument(typedarray).promise;
      const maxPages = pdf.numPages;
      let textContent = "";

      for (let i = 1; i <= maxPages; i++) {
        const page = await pdf.getPage(i);
        const textContentObj = await page.getTextContent();
        const pageText = textContentObj.items.map((item) => item.str).join(" ");
        textContent += `${pageText} \n`;
      }

      setText(textContent);
    };
    reader.readAsArrayBuffer(file);
  }

  return (
    <div className="h-full w-full overflow-hidden">
      <h1>Dropzone</h1>
      <div
        {...getRootProps({
          className: `${
            isVisible ? "h-full" : "hidden"
          } flex items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100`,
        })}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
      </div>
      <div
        className={`${
          isVisible ? "hidden" : "block"
        } flex justify-center items-center rounded-md`}
      >
        <Document file={file}>
          <Page scale={0.7} pageNumber={1} />
        </Document>
      </div>
      <div className="mt-2 flex justify-between">
        <p className="p-2">{acceptedFiles[0]?.path}</p>
        <button className="bg-white p-2 rounded-md" onClick={handleCleanInput}>
          Limpiar
        </button>
      </div>
    </div>
  );
}
