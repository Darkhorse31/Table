import React from "react";
import { useSelector } from "react-redux";
const Dasboard = () => {
  const Ndata = useSelector((state) => state);
  console.log(Ndata);
  return <div>Dasboard</div>;
};

export default Dasboard;
