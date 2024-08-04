import { useState } from "react";
import { Dropzone } from "../components/Dropzone";
import { FeedbackAI } from "../components/FeedbackAI";
import { DescriptionJob } from "../components/DescriptionJob";

export function MainPage() {
  const [dataJob, setDataJob] = useState({});
  const [file, setFile] = useState();
  const [dataCV, setDataCV] = useState();

  const dataJobText = `Title: ${dataJob.title}. Seniority level: ${dataJob.jobCriteria?.seniorityLevel}. Employment type: ${dataJob.jobCriteria?.employmentType}. Job function: ${dataJob.jobCriteria?.jobFunction}. Industries: ${dataJob.jobCriteria?.industries}. Description: ${dataJob.description}.`;

  return (
    <div className="grid grid-cols-3 gap-8 mx-auto p-5 h-screen">
      <div className="flex flex-col bg-gray-400 rounded-lg p-2 overflow-y-scroll">
        <DescriptionJob dataJob={dataJob} setDataJob={setDataJob} />
      </div>
      <div className="flex flex-col bg-gray-400 rounded-lg p-2">
        <Dropzone file={file} setFile={setFile} setDataCV={setDataCV} />
      </div>
      <div className="flex flex-col bg-gray-400 rounded-lg p-2">
        <FeedbackAI dataCV={dataCV} dataJob={dataJobText} />
      </div>
    </div>
  );
}
