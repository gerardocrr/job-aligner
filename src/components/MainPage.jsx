import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Dropzone } from "./Dropzone";
import { FeedbackAI } from "./FeedbackAI";
import { Description } from "./Description";

export function MainPage() {
  const [data, setData] = useState({});
  const [file, setFile] = useState();
  const [text, setText] = useState();
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
        <Description />
      </div>
      <div className="flex flex-col bg-gray-400 rounded-lg p-2">
        <h1>CV</h1>
        <Dropzone file={file} setFile={setFile} text={text} setText={setText} />
      </div>
      <div className="flex flex-col bg-gray-400 rounded-lg p-2">
        <FeedbackAI text={text} />
      </div>
    </div>
  );
}
