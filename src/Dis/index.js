import React, { useState } from "react";
import axios from "axios";
var FormData = require("form-data");
const Form = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [file, setfile] = useState([null]);
  var data = new FormData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    data.append("unit_id", "715");
    data.append("user_id", "5");
    data.append("status", "completed");
    data.append("remarks", "i think its done");
    data.append("notify", "yes");
    file.map((file) => {
      data.append("image[]", file);
    });

    await axios
      .post("http://89.40.2.219/api/v1/send_remarks", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-gray-400 w-3/4 h-[30%] grid place-content-center shadow-xl rounded-lg ring-gray-400 ring-2 ">
      <form
        className="flex flex-col items-center gap-5 "
        onSubmit={handleSubmit}
      >
        {/* <div className="flex flex-col gap-2 bg-transparent">
          <input
            type="text"
            placeholder="Enter username"
            className="input focus:bg-transparent active:bg-transparent"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input focus:bg-transparent active:bg-transparent"
            value={password}
            onChange={(e) => setpassword([e.target.value])}
          />
        </div> */}
        <input
          type="file"
          id="files"
          onChange={(e) => setfile([e.target.files])}
          multiple
        />
        <button
          type="submit"
          className="btn"
          // disabled={email.length > 0 && password.length > 0 ? false : true}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
