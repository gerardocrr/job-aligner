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
    <div>
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
  );
}
