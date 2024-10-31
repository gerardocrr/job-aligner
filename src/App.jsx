import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JobSearch } from "./pages/JobSearch";
import { MainPage } from "./pages/MainPage";
import { Toaster } from "sonner";
import { Layout } from "./components/Layout";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<JobSearch />}></Route>
            <Route path="/description/:id" element={<MainPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
