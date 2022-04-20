import React from "react";
import s from "./TeamCard.module.css";

export default function TeamCard({ name, league, country }) {
  let newLeague = league.toUpperCase();
  let newCountry = country.toUpperCase();
  return (
    <>
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
          <button className={s.button}>Ver jugadores</button>
          <button className={s.button}>Edit</button>
        </div>
      </div>
    </>
  );
}
