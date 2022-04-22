import React, { useState } from "react";
import s from "./PlayerCard.module.css";
import { useDispatch } from "react-redux";
import { deletePlayer, searchPlayer } from "../../actions/index";
import FormEdit from "../FormEditPlayer/FormEditPlayer"

export default function PlayerCard({
  id,
  name,
  age,
  squad_number,
  position,
  nationality,
}) {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const onClick = () => {
    setClick(true);
  };

  let newNationality = nationality.toUpperCase()

  const borrar = () => {
    dispatch(deletePlayer(id));
    dispatch(searchPlayer(""))
  };
  position = position.toUpperCase();
  name = name.toUpperCase();
  return (
    <div className={s.container}>
      { click ? <FormEdit id={id} setState={setClick}/>
      :
        <div className={s.card}>
          <h5 className={s.name}>{name}</h5>
          <div className={s.description}>
            <p className={s.age}>Edad: {age}</p>
            <p className={s.squad_number}>Dorsal: {squad_number}</p>
            <p className={s.position}> Pos: {position}</p>
            <p className={s.name}>{newNationality}</p>
            <button onClick={onClick}>Editar</button>
            <button onClick={borrar}>Eliminar</button>
          </div>
        </div>
      }
    </div>
  );
}
