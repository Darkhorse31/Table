import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cal from "./Calculator";
import MultipleImage from "./MultipleImagesend/MultipleImage";
import Dasboard from "./Testing/Dasboard";

import Login from "./Testing/Login";

function App() {
  return (
    <>
      <div className="w-full h-screen grid place-items-center">
        <MultipleImage />
        {/* <Cal /> */}
        {/* <DataGridDemo /> */}
      </div>
    </>
  );
}

export default App;
