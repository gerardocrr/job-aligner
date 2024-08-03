import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function JobSearch() {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const parsedUrl = new URL(url);
    const currentJobId = parsedUrl.searchParams.get("currentJobId");
    if (currentJobId == null) {
      const match = url.match(/\/jobs\/view\/(\d+)/);
      if (match) {
        const jobId = match[1];
        navigate(`/description/${jobId}`);
      } else {
        alert("Verifica que tu url sea correcta.");
      }
    } else {
      navigate(`/description/${currentJobId}`);
    }
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-96">
      <h1 className="text-3xl font-bold mb-8">URL Linkedin Job</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full max-w-md px-4 md:px-0 space-y-4"
      >
        <input
          onChange={handleChange}
          type="text"
          placeholder="https://www.linkedin.com/jobs/view/0000000000/...."
          className="flex-1 h-10 px-4 rounded-md border border-input w-full p-2"
          required
        />
        <button
          type="submit"
          className="h-10 px-6 rounded-md bg-black text-white hover:bg-gray-800"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}
