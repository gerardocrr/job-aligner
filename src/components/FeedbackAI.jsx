export function FeedbackAI({ isLoadingFeedback, feedback }) {
  return (
    <div>
      <h1 className="font-bold mb-5">Feedback 🤖</h1>
      {isLoadingFeedback ? (
        <div>
          <div role="status" className="w-full animate-pulse mb-10">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full w-5/6 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full w-6/12 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
            <span className="sr-only">Loading...</span>
          </div>
          <div role="status" className="w-full animate-pulse mb-10">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full w-5/6 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full w-6/12 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
            <span className="sr-only">Loading...</span>
          </div>
          <div role="status" className="w-full animate-pulse mb-10">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full w-5/6 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full w-6/12 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
            <span className="sr-only">Loading...</span>
          </div>
          <div role="status" className="w-full animate-pulse mb-10">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full w-5/6 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full w-6/12 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-blue-400 bg-opacity-40 p-2 rounded-md mb-5">
            <h2 className="font-bold mb-2">Compatibilidad ✨</h2>
            <p className="mb-5">{feedback[0]}</p>
          </div>
          <div className="bg-blue-400 bg-opacity-40 p-2 rounded-md mb-5">
            <h2 className="font-bold mb-2">Fortalezas 💪</h2>
            <p className="mb-5">{feedback[1]}</p>
          </div>
          <div className="bg-blue-400 bg-opacity-40 p-2 rounded-md mb-5">
            <h2 className="font-bold mb-2">Areas de mejora 🔝</h2>
            <p className="mb-5">{feedback[2]}</p>
          </div>
          <div className="bg-blue-400 bg-opacity-40 p-2 rounded-md mb-5">
            <h2 className="font-bold mb-2">Consejos para el CV 💡</h2>
            <p>{feedback[3]}</p>
          </div>
        </div>
      )}
    </div>
  );
}
