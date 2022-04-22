import React, { useState } from "react";
import img from "../../img/fondo.jpg";
import s from "./Create.module.css";

import CreateTeam from "../CreateTeam/CreateTeam";
import CreatePlayer from "../CreatePlayer/CreatePlayer";

export default function Create() {
  const [clickTeam, setClickTeam] = useState(false);
  const [clickPlayer, setClickPlayer] = useState(false);

  const changeTeam = () => {
    clickTeam ? setClickTeam(false) : setClickTeam(true);
  };
  const changePlayer = () => {
    clickPlayer ? setClickPlayer(false) : setClickPlayer(true);
  };

  return (
    <>
      <img className={s.background} src={img} alt="img not found" />
      <div className={s.container}>
        <div className={s.team}>
          <h3 onClick={changeTeam}>Crear un equipo</h3>
          {clickTeam && <CreateTeam />}
        </div>
        <div className={s.team}>
          <h3 onClick={changePlayer}>Crear un jugador</h3>
          {clickPlayer && <CreatePlayer />}
        </div>
      </div>
    </>
  );
}
