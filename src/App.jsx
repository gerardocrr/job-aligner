import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JobSearch } from "./components/JobSearch";
import { Description } from "./components/Description";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<JobSearch />}></Route>
          <Route path="/description/:id" element={<Description />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
