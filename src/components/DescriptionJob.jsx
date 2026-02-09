export function DescriptionJob({ dataJob, isLoading }) {
  return (
    <div>
      <h1 className="font-bold mb-5">Descripción del empleo</h1>
      {isLoading ? (
        <div className="flex mb-5">
          <div>
            <div className="flex items-center justify-center bg-gray-300 rounded w-16 h-16">
              <svg
                className="text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
                width={"50%"}
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
          <div className="mx-5 w-full">
            <div className="w-full animate-pulse mb-10">
              <div className="h-2 bg-gray-200 rounded-full w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full w-1/4 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full w-1/6 mb-2.5"></div>
              <span className="sr-only">Loading...</span>
            </div>
            <div className="w-full animate-pulse mb-10">
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full w-5/6 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full w-6/12 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex mb-5">
          <div className="mt-1 min-w-16 max-w-16">
            <img
              className="rounded-md"
              src={dataJob.data[0].employer_logo}
              alt="company logo"
              width={"150px"}
            />
          </div>
          <div className="mx-5">
            <div className="mb-5">
              <p>Título: {dataJob.data.title}</p>
              <p>Empresa: {dataJob.data.company.name}</p>
              <p>Ubicación: {dataJob.data.location}</p>
            </div>
            <div>
              <p>Descripción:</p>
              <p>{dataJob.data.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
