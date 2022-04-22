import React, { useState } from "react";
import s from "./FormEditTeam.module.css";
import {putTeam, deleteTeam} from "../../actions/index"
import {useDispatch} from "react-redux"

export default function FormEditTeam({ id, setState }) {
  const dispatch= useDispatch();
  
  const cancel = () => {
    setState(false);
  };
  const [inputs, setInputs] = useState({
    name: "",
    league: "",
    country: "",
  });
  const borrar = () => {
    dispatch(deleteTeam(id))
  }

  const onSubmit = () => {
    let finalChanges = {};
    for (const key in inputs) {
      if (inputs[key] !== "") {
        finalChanges[key] = inputs[key];
      }
    }
    dispatch(putTeam(id, finalChanges));
  };

  return (
    <form
    onSubmit={onSubmit} 
    className={s.form}>
      <input
        className={s.input}
        onChange={(e) => {
          setInputs({
            ...inputs,
            name: e.target.value,
          });
        }}
        value={inputs.name}
        type="text"
        placeholder="Cambiar nombre"
      />
      <div className={s.info}>
        <input
          className={s.input}
          onChange={(e) => {
            setInputs({
              ...inputs,
              league: e.target.value,
            });
          }}
          value={inputs.league}
          type="text"
          placeholder="Cambiar liga"
        />
        <input
          className={s.input}
          onChange={(e) => {
            setInputs({
              ...inputs,
              country: e.target.value,
            });
          }}
          value={inputs.country}
          type="text"
          placeholder="Cambiar pais"
        />
      </div>
      <div>
        <button className={s.button} type="submit">
          Guardar
        </button>
        <button className={s.button} onClick={cancel}>
          Cancelar
        </button>
        <button onClick={borrar} className={s.button}>Eliminar</button>
      </div>
    </form>
  );
}
