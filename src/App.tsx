import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Form } from "./components/Form";
import { SecondPage } from "./components/secondPage";
// import SecondPage from "./SecondPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/secondPage" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default App;
