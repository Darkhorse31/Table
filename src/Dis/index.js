import React from "react";

const Form = () => {
  return (
    <div className="bg-gray-400 w-3/4 h-[30%] grid place-content-center shadow-xl rounded-lg ring-gray-400 ring-2 ">
      <form className="flex flex-col items-center gap-5 ">
        <div className="flex flex-col gap-2 bg-transparent">
          <input
            type="text"
            placeholder="Enter username"
            className="input focus:bg-transparent active:bg-transparent"
          />
          <input
            type="password"
            placeholder="Password"
            className="input focus:bg-transparent active:bg-transparent"
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
