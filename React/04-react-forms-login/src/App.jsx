import { Route, Routes } from "react-router-dom";
import Form from "./components/form/Form";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/dashbaord" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
