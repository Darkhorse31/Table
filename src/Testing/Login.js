import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { pushData } from "../Store/CustomerSlice";
import swal from "sweetalert";
const Login = () => {
  const dispatch = useDispatch();

  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();
  const [Navigation, setNavigation] = useState(false);

  const handleClick = async (event) => {
    event.preventDefault();
    await axios
      .post("http://89.40.2.219/api/v1/login", Login)
      .then((res) => {
        // console.log(res);
        const { data } = res;
        if (data.user_id) {
          setNavigation(true);
          Navigate("/das");
        }
        console.log(Navigation);
      })
      .catch((err) => {
        if (err) {
          swal({
            icon: "error",
            title: "Customer is not exist",
            text: "Please check Information",
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleClick} className="flex flex-col gap-2">
        <input
          type="text"
          value={Login.email}
          onChange={(e) => setLogin({ ...Login, email: e.target.value })}
          placeholder="email"
        />
        <input
          type="password"
          value={Login.password}
          onChange={(e) => setLogin({ ...Login, password: e.target.value })}
          placeholder="password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
