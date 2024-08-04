import { useState } from "react";
import { getFeedback } from "../lib/ai-response";

export function FeedbackAI({ dataCV, dataJob }) {
  const [feedback, setFeedback] = useState("");
  const handleGetFeedback = async () => {
    const summary = await getFeedback(dataCV, dataJob);
    setFeedback(summary);
    console.log(summary);
  };
  return (
    <div>
      <h1>AI </h1>
      <button onClick={handleGetFeedback} className="bg-white p-2 rounded-md">
        AI
      </button>
      <p>{feedback}</p>
    </div>
  );
}
