import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ComB = () => {
  const [gameName, setGameName] = useState("");

  const [playerName, setPlayerName] = useState("");
  const dispatch = useDispatch(); //to call function

  const changeName = () => {
    dispatch({ type: "CHANGE_GAME", payload: gameName });
  };

  const changePlayer = () => {
    dispatch({ type: "CHANGE_PLAYER", payload: playerName });
  };
  return (
    <>
      <h2> Form</h2>
      <input
        type="text"
        placeholder="Type Game"
        onChange={(event) => setGameName(event.target.value)}
      />
      &nbsp;
      <button onClick={changeName}>Change Game</button>
       <hr />
      <input
        type="text"
        placeholder="Enter player name"
        onChange={(event) => setPlayerName(event.target.value)}
      />
      &nbsp;
      <button onClick={changePlayer}>Change Player</button>
    </>
  );
};

export default ComB;
