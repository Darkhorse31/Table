import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cal from "./Calculator";
import Form from "./Dis";
import MultipleImage from "./MultipleImagesend/MultipleImage";
import Dasboard from "./Testing/Dasboard";

import Login from "./Testing/Login";

function App() {
  return (
    <>
      <div className="w-full h-screen grid place-items-center App">
        {/* <MultipleImage /> */}
        {/* <Cal /> */}
        {/* <DataGridDemo /> */}
        <Form />
      </div>
    </>
  );
}

export default App;
