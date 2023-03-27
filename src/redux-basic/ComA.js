import React from "react";

import { useSelector } from "react-redux";
//get data from reducer

const ComA = () => {
  const name = useSelector((store) => store);
  return (
    <>
      <h1>The game is {name.game}</h1>
      <h1>The player is {name.player}</h1>
    </>
  );

};

export default ComA;
