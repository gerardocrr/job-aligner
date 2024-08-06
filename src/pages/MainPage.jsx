import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Dropzone } from "../components/Dropzone";
import { FeedbackAI } from "../components/FeedbackAI";
import { DescriptionJob } from "../components/DescriptionJob";
import { Header } from "../components/Header";
import { toast } from "sonner";

export function MainPage() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [dataJob, setDataJob] = useState({});
  const [file, setFile] = useState();
  const [dataCV, setDataCV] = useState();
  const [feedback, setFeedback] = useState([]);
  const dataJobText = `Title: ${dataJob.title}. Seniority level: ${dataJob.jobCriteria?.seniorityLevel}. Employment type: ${dataJob.jobCriteria?.employmentType}. Job function: ${dataJob.jobCriteria?.jobFunction}. Industries: ${dataJob.jobCriteria?.industries}. Description: ${dataJob.description}.`;

  useEffect(() => {
    const fetchDatos = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api-linkedin.vercel.app/api/jobs/${params.id}`
      );
      const data = await response.json();
      setDataJob(data);
      setIsLoading(false);
    };
    fetchDatos();
  }, [params.id]);

  useEffect(() => {
    const verifyData = () => {
      if (!dataJob.title) {
        toast.error(
          "Ha ocurrido un error al cargar los datos, vuelve a intentarlo."
        );
      } else {
        toast.success("Datos cargados correctamente.");
      }
    };
    verifyData();
  }, [isLoading]);

  return isLoading ? (
    <div className="flex items-center justify-center h-svh">
      <div className="loader"></div>
    </div>
  ) : dataJob.title ? (
    <div className="grid grid-cols-3 gap-8 mx-5 p-2 h-screen">
      <div className="col-span-3 h-5">
        <Header />
      </div>
      <div className="flex flex-col bg-blue-400 bg-opacity-40 rounded-lg p-2 overflow-y-scroll shadow-md shadow-gray-400">
        <DescriptionJob dataJob={dataJob} setDataJob={setDataJob} />
      </div>
      <div className="flex flex-col bg-blue-400 bg-opacity-40 rounded-lg p-2 overflow-y-scroll shadow-md shadow-gray-400">
        <Dropzone
          file={file}
          setFile={setFile}
          setDataCV={setDataCV}
          setFeedback={setFeedback}
        />
      </div>
      <div className="flex flex-col bg-blue-400 bg-opacity-40 rounded-lg p-2 overflow-y-scroll shadow-md shadow-gray-400">
        <FeedbackAI
          dataCV={dataCV}
          dataJob={dataJobText}
          feedback={feedback}
          setFeedback={setFeedback}
        />
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
}
