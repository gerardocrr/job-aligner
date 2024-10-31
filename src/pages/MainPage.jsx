import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Dropzone } from "../components/Dropzone";
import { FeedbackAI } from "../components/FeedbackAI";
import { DescriptionJob } from "../components/DescriptionJob";
import { toast } from "sonner";

export function MainPage() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(true);
  const [dataJob, setDataJob] = useState({});
  const [feedback, setFeedback] = useState([]);
  const [isVisibleDetails, setIsVisibleDetails] = useState(true);
  const [isVisibleCV, setIsVisibleCV] = useState(false);
  const [isVisibleFeedback, setIsVisibleFeedback] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          "x-rapidapi-host": "linkedin-api8.p.rapidapi.com",
        },
      };
      const response = await fetch(
        `https://linkedin-api8.p.rapidapi.com/get-job-details?id=${params.id}`,
        options
      );
      const data = await response.json();
      if (data.success) {
        setDataJob(data);
        setIsLoading(false);
        toast.success("Datos cargados correctamente.");
      } else {
        toast.error("Ha ocurrido un error, vuelve a intentarlo.");
      }
    };
    fetchData();
  }, []);

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
        <div className={`flex justify-end mt-5 ${isLoading ? "hidden" : ""}`}>
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
          setFeedback={setFeedback}
          setIsVisibleCV={setIsVisibleCV}
          setIsVisibleFeedback={setIsVisibleFeedback}
          dataJob={dataJob}
          setIsLoadingFeedback={setIsLoadingFeedback}
        />
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
