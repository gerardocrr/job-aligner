import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";

export function Description() {
  const [data, setData] = useState({});
  const params = useParams();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
  });
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  useEffect(() => {
    const fetchDatos = async () => {
      const response = await fetch(
        `https://api-linkedin.vercel.app/api/jobs/${params.id}`
      );
      const data = await response.json();
      console.log(data);
      setData(data);
    };
    fetchDatos();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8 mx-auto p-5 h-screen">
      <div className="flex flex-col bg-gray-400 rounded-lg p-2 overflow-y-scroll">
        <h1>Description</h1>
        {data.title ? (
          <div>
            <h1>{data.title}</h1>
            <p>{data.company}</p>
            <p>{data.location}</p>
            <br />
            <p>{data.jobCriteria.employmentType}</p>
            <p>{data.jobCriteria.industries}</p>
            <p>{data.jobCriteria.jobFunction}</p>
            <p>{data.jobCriteria.seniorityLevel}</p>
            <br />
            <p>{data.description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="flex flex-col bg-gray-400 rounded-lg p-2">
        <h1>CV</h1>
        <div className="flex items-center justify-center w-full h-full">
          <div className="h-full w-full">
            <div
              {...getRootProps({
                className:
                  "flex items-center justify-center h-[95%] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100",
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
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
            </div>
            <div className="mt-2">
              <p>{files}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-gray-400 rounded-lg p-2">
        <h1>AI </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          sed dolore, at ullam esse quisquam odio? Repellat sapiente ducimus
          libero accusantium! Quibusdam veritatis alias porro laboriosam,
          laborum provident minima dolores.
        </p>
      </div>
    </div>
  );
}
