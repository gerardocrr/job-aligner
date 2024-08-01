import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Dropzone } from "./Dropzone";
import { FeedbackAI } from "./FeedbackAI";

export function Description() {
  const [data, setData] = useState({});
  const params = useParams();

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
        <Dropzone />
      </div>
      <div className="flex flex-col bg-gray-400 rounded-lg p-2">
        <FeedbackAI />
      </div>
    </div>
  );
}
