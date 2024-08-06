export function DescriptionJob({ dataJob }) {
  return (
    <div>
      <h1 className="font-bold mb-5">Descripción del empleo</h1>
      <div>
        <p>Título: {dataJob.title}</p>
        <p>Empresa: {dataJob.company}</p>
        <p>Ubicaciónn: {dataJob.location}</p>
        <br />
        <p>Criterios del empleo:</p>
        <li>Tipo de empleo: {dataJob.jobCriteria.employmentType}</li>
        <li>Industria: {dataJob.jobCriteria.industries}</li>
        <li>Funciones del empleo: {dataJob.jobCriteria.jobFunction}</li>
        <li>Seniority: {dataJob.jobCriteria.seniorityLevel}</li>
        <br />
        <p>Descripción:</p>
        <p>{dataJob.description}</p>
      </div>
    </div>
  );
}
