import { useState } from "react";
import { Dropzone } from "../components/Dropzone";
import { FeedbackAI } from "../components/FeedbackAI";
import { DescriptionJob } from "../components/DescriptionJob";

export function MainPage() {
  const [dataJob, setDataJob] = useState({});
  const [file, setFile] = useState();
  const [text, setText] = useState();

  return (
    <div className="grid grid-cols-3 gap-8 mx-auto p-5 h-screen">
      <div className="flex flex-col bg-gray-400 rounded-lg p-2 overflow-y-scroll">
        <DescriptionJob dataJob={dataJob} setDataJob={setDataJob} />
      </div>
      <div className="flex flex-col bg-gray-400 rounded-lg p-2">
        <Dropzone file={file} setFile={setFile} text={text} setText={setText} />
      </div>
      <div className="flex flex-col bg-gray-400 rounded-lg p-2">
        <FeedbackAI text={text} />
      </div>
    </div>
  );
}
