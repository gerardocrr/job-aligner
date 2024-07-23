import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div className="mx-auto p-5">
      <h1>Description</h1>
      {data.title ? (
        <div>
          <p>{data.title}</p>
          <p>{data.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
