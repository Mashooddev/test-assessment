import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./Pages/Test";
import Redirect from "./Pages/Redirect";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
