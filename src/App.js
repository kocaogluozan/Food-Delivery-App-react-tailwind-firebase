import React from "react";
import Header from "./components/Header";
import CreateContainer from "./components/CreateContainer";
import MainContainer from "./components/MainContainer";

import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="bg-primary w-screen h-auto flex flex-col">
      <Header />
      <main className="mt-24 p-8 w-full bg-yellow-300">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/create" element={<CreateContainer />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
