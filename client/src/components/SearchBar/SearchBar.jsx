import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTeam, searchPlayer } from "../../actions/index";
import s from "./SearchBar.module.css"

export default function SearchBar() {
  const dispatch = useDispatch();

  const [bPlayer, setBPlayer] = useState("");
  const [bTeam, setBTeam] = useState("");

  const changePlayer = (e) => {
    setBPlayer(e.target.value);
  };
  const changeTeam = (e) => {
    setBTeam(e.target.value);
  };
  const onSubmitTeam = () => {
    dispatch(searchTeam(bTeam));
    setBTeam("");
  };
  const onSubmitPlayer = () => {
    dispatch(searchPlayer(bPlayer));
    setBPlayer("");
  };

  return (
    <>
      <div className={s.buscadores}>
        <input
        className={s.input}
          onChange={(e) => changePlayer(e)}
          value={bPlayer}
          type="text"
          placeholder="Busca Jugador"
        />
        <button className={s.button} type="submit" onClick={onSubmitPlayer}>
          Buscar
        </button>
      </div>
      <div className={s.buscadores}>
        <input
         className={s.input}
          onChange={(e) => changeTeam(e)}
          value={bTeam}
          type="text"
          placeholder="Busca Equipo"
        />
        <button className={s.button} type="submit" onClick={onSubmitTeam}>
          Buscar
        </button>
      </div>
    </>
  );
}
