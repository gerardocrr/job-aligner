import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function DescriptionJob({ dataJob, setDataJob }) {
  const params = useParams();

  useEffect(() => {
    const fetchDatos = async () => {
      const response = await fetch(
        `https://api-linkedin.vercel.app/api/jobs/${params.id}`
      );
      const data = await response.json();
      setDataJob(data);
    };
    fetchDatos();
  }, []);

  return (
    <div>
      <h1>Description</h1>
      {dataJob.title ? (
        <div>
          <h1>{dataJob.title}</h1>
          <p>{dataJob.company}</p>
          <p>{dataJob.location}</p>
          <br />
          <p>{dataJob.jobCriteria.employmentType}</p>
          <p>{dataJob.jobCriteria.industries}</p>
          <p>{dataJob.jobCriteria.jobFunction}</p>
          <p>{dataJob.jobCriteria.seniorityLevel}</p>
          <br />
          <p>{dataJob.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
