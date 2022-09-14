import React from "react";

import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import FormPage from "./pages/FormPage";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
