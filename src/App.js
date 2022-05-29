import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dasboard from "./Testing/Dasboard";

import Login from "./Testing/Login";

function App() {
  return (
    <>
      <div className="w-full h-screen grid place-items-center">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/das" element={<Dasboard/>}></Route>
        </Routes>
        {/* <DataGridDemo /> */}
      </div>
    </>
  );
}

export default App;
