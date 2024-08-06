import { useState } from "react";
import { getFeedback } from "../lib/ai-response";

export function FeedbackAI({ dataCV, dataJob, feedback, setFeedback }) {
  const [isLoading, setIsLoading] = useState(false);
  const handleGetFeedback = async () => {
    setIsLoading(true);
    const response = await getFeedback(dataCV, dataJob);
    const partes = response.split("\n\n");
    setFeedback(partes);
    setIsLoading(false);
  };
  return (
    <div>
      <h1 className="font-bold mb-5">Obtener feedback 🤖</h1>
      {dataCV ? (
        <>
          <button
            onClick={handleGetFeedback}
            className={`${
              feedback[0] || isLoading
                ? "hidden"
                : "block bg-white p-5 rounded-md w-full hover:bg-gray-100"
            }`}
          >
            Analizar datos 🤖
          </button>
          <div className={`${!feedback[0] ? "hidden" : "block"}`}>
            <div className="bg-white p-2 rounded-md mb-5">
              <h2 className="font-bold mb-2">Compatibilidad ✨</h2>
              <p className="mb-5">{feedback[0]}</p>
            </div>
            <div className="bg-white p-2 rounded-md mb-5">
              <h2 className="font-bold mb-2">Fortalezas 💪</h2>
              <p className="mb-5">{feedback[1]}</p>
            </div>
            <div className="bg-white p-2 rounded-md mb-5">
              <h2 className="font-bold mb-2">Areas de mejora 🔝</h2>
              <p className="mb-5">{feedback[2]}</p>
            </div>
            <div className="bg-white p-2 rounded-md mb-5">
              <h2 className="font-bold mb-2">Consejos para el CV 💡</h2>
              <p>{feedback[3]}</p>
            </div>
          </div>
          <div className={`${isLoading ? "block" : "hidden"}`}>
            <div role="status" className="max-w-sm animate-pulse mb-10">
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
            <div role="status" className="max-w-sm animate-pulse mb-10">
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
            <div role="status" className="max-w-sm animate-pulse mb-10">
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
            <div role="status" className="max-w-sm animate-pulse mb-10">
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center bg-white mb-2 rounded-md">
          <p className="p-5">💡Sube tu CV para poder analizar los datos💡</p>
        </div>
      )}
    </div>
  );
}
