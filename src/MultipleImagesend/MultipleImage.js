import React, { useState } from "react";

const MultipleImage = () => {
  const [file, setfile] = useState([]);

  const handleChange = (event) => {
    setfile([...file, URL.createObjectURL(event.target.files[0])]);
  };
  const handleSubmit = (event) => {
    console.log(file);
    event.preventDefault();
  };
  return (
    <div className="w-1/2">
      <div className="flex gap-4 overflow-x-scroll scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin ">
        {file.map((e) => {
          return <img src={e} width="150px" height="150px" />;
        })}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label htmlFor="image">Choose me</label>
        <input
          type="file"
          id="image"
          onChange={handleChange}
          className="hidden"
        />
        <button
          type="submit"
          className="bg-gray-400 shadow-lg px-6 py-2 rounded-[50rem] hover:bg-slate-200 active:shadow-none"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default MultipleImage;
