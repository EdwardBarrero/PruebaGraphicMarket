import React from "react";
import s from "./PlayerCard.module.css";

export default function PlayerCard({
  name,
  age,
  squad_number,
  position,
  nationality,
}) {
  position = position.toUpperCase();
  name = name.toUpperCase();
  return (
    <div className={s.card}>
      <h5 className={s.name}>{name}</h5>
      <div className={s.description}>
        <p className={s.age}>Edad: {age}</p>
        <p className={s.squad_number}>Dorsal: {squad_number}</p>
        <p className={s.position}> Pos: {position}</p>
        <p className={s.name}>{nationality}</p>
      </div>
    </div>
  );
}
