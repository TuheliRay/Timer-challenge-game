import { useState, useRef } from "react";
export default function Player() {
  const nameOfPlayer = useRef();
  const [playerName, editPlayerName] = useState("");
  function handleClick() {
    editPlayerName(nameOfPlayer.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"}</h2>
      <p>
        <input ref={nameOfPlayer} type="text" placeholder="Your name please" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
