import React, { useState } from "react";
import s from "./TeamCard.module.css";
import Players from "../Players/Players";
import FormEditTeam from "../FormEditTeam/FormEditTeam";

export default function TeamCard({ id, name, league, country }) {
  let newLeague = league.toUpperCase();
  let newCountry = country.toUpperCase();
  const [showPlayers, setShowPlayers] = useState(false);
  const [click, setClick] = useState(false);

  const show = () => {
    if (!showPlayers) setShowPlayers(true);
    else setShowPlayers(false);
  };

  const edit = () => {
    setClick(true)
  }

  return (
    <>
      {click ? <FormEditTeam id={id} setState={setClick}/> : <div>
        <div className={s.card}>
          <h3 className={s.name}>{name}</h3>
          <div>
            <p className={s.league}>
              <b>League: </b>
              <br /> {newLeague}{" "}
            </p>
            <p className={s.country}>
              <b> Country: </b>
              <br /> {newCountry}
            </p>
          </div>
          <div>
            <button onClick={() => show()} className={s.button}>
              {showPlayers ? "Dejar de ver" : "Ver jugadores"}
            </button>
            <button onClick={edit} className={s.button}>Edit</button>
          </div>
        </div>
        {showPlayers && <Players id={id} />}
      </div>
      }
      
    </>
  );
}
