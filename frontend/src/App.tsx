import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LogPage from "./pages/LogPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<LogPage />} />
      </Routes>
    </>
  );
}

export default App;
