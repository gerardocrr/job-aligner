import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Toaster, toast } from "sonner";

export function JobSearch() {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const parsedUrl = new URL(url);
      const currentJobId = parsedUrl.searchParams.get("currentJobId");
      if (currentJobId == null) {
        const match = url.match(/\/jobs\/view\/(\d+)/);
        if (match) {
          const jobId = match[1];
          navigate(`/description/${jobId}`);
        } else {
          toast.error("Verifica que la URL sea correcta.");
        }
      } else {
        navigate(`/description/${currentJobId}`);
      }
    } catch (error) {
      toast.error("Verifica que la URL sea correcta.");
    }
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="flex flex-col h-svh justify-between container mx-auto">
      <Toaster richColors position="top-right" />
      <Header />
      <main className="mb-auto h-96 flex flex-col items-center justify-center">
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
      </main>
      <footer className="h-16 flex justify-center items-center text-lg">
        <p>
          💻 Develop by{" "}
          <strong>
            <a href="https://github.com/gerardocrr" target="_blank">
              Gerardo Cruz
            </a>
          </strong>
        </p>
      </footer>
    </div>
  );
}
