import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Dropzone } from "../components/Dropzone";
import { FeedbackAI } from "../components/FeedbackAI";
import { DescriptionJob } from "../components/DescriptionJob";
import { getFeedback } from "../lib/ai-response";
import dataJobs from "./dataJobs.json";
import { toast } from "sonner";

export function MainPage() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(true);
  const [dataJob, setDataJob] = useState({});
  const [file, setFile] = useState();
  const [dataCV, setDataCV] = useState();
  const [feedback, setFeedback] = useState([]);
  const [isVisibleDetails, setIsVisibleDetails] = useState(true);
  const [isVisibleCV, setIsVisibleCV] = useState(false);
  const [isVisibleFeedback, setIsVisibleFeedback] = useState(false);
  const dataJobText = `Title: ${dataJobs.data.title}. Description: ${dataJobs.data.description}.`;

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          "x-rapidapi-host": "linkedin-data-api.p.rapidapi.com",
        },
      };
      const response = await fetch(
        `https://linkedin-data-api.p.rapidapi.com/get-job-details?id=${params.id}`,
        options
      );
      const data = await response.json();
      setDataJob(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleFetchFeedback = async () => {
    const response = await getFeedback(dataCV, dataJobText);
    const partes = response.split("\n\n");
    setFeedback(partes);
    setIsLoadingFeedback(false);
  };

  return (
    <div className="container">
      <div className="grid grid-cols-3 text-center bg-gray-400 p-2 gap-5 mb-5 rounded-md">
        <div
          className={`p-1 rounded-md ${
            isVisibleDetails ? "bg-white" : "bg-gray-400 text-gray-700"
          }`}
        >
          Detalles
        </div>
        <div
          className={`p-1 rounded-md ${
            isVisibleCV ? "bg-white" : "bg-gray-400 text-gray-700"
          }`}
        >
          CV
        </div>
        <div
          className={`p-1 rounded-md ${
            isVisibleFeedback ? "bg-white" : "bg-gray-400 text-gray-700"
          }`}
        >
          Feedback
        </div>
      </div>
      <div
        className={`bg-white p-5 border shadow rounded-md ${
          isVisibleDetails ? "" : "hidden"
        }`}
      >
        <DescriptionJob dataJob={dataJob} isLoading={isLoading} />
        <div className="flex justify-end mt-5">
          <button
            className="h-10 rounded-md text-black mx-10 hover:underline"
            onClick={() => {
              setIsVisibleDetails(false);
              setIsVisibleCV(true);
            }}
          >
            Ingresar otro empleo
          </button>
          <button
            className="h-10 px-6 rounded-md bg-black text-white hover:bg-gray-800"
            onClick={() => {
              setIsVisibleDetails(false);
              setIsVisibleCV(true);
            }}
          >
            Continuar
          </button>
        </div>
      </div>
      <div
        className={`bg-white p-5 border shadow rounded-md ${
          isVisibleCV ? "" : "hidden"
        }`}
      >
        <Dropzone
          file={file}
          setFile={setFile}
          setDataCV={setDataCV}
          setFeedback={setFeedback}
        />
        <div className="flex justify-end mt-10">
          <button
            className="h-10 rounded-md text-black mx-10 hover:underline"
            onClick={() => {
              setIsVisibleDetails(false);
              setIsVisibleCV(true);
            }}
          >
            Ingresar otro empleo
          </button>
          <button
            className="h-10 px-6 rounded-md bg-black text-white hover:bg-gray-800"
            onClick={() => {
              setIsVisibleCV(false);
              setIsVisibleFeedback(true);
              handleFetchFeedback();
            }}
          >
            Continuar
          </button>
        </div>
      </div>
      <div
        className={`bg-white p-5 border shadow rounded-md ${
          isVisibleFeedback ? "" : "hidden"
        }`}
      >
        <FeedbackAI isLoadingFeedback={isLoadingFeedback} feedback={feedback} />
        <div className="flex justify-end mt-5">
          <button
            className="h-10 rounded-md text-black mx-10 hover:underline"
            onClick={() => {
              setIsVisibleDetails(false);
              setIsVisibleCV(true);
            }}
          >
            Ingresar otro empleo
          </button>
        </div>
      </div>
    </div>
  );
}
