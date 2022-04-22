import React, { useState } from "react";
import s from "./FormEditPlayer.module.css";
import { putPlayer } from "../../actions/index";
import { useDispatch } from "react-redux";

export default function InputEdit({ id, setState }) {
  const dispatch = useDispatch();
  const [change, setChange] = useState({
    name: "",
    age: "",
    squad_number: "",
    position: "",
    nationality: "",
  });

  const onClick = (e) => {
    setChange({
      ...change,
      position: e.target.value,
    });
  };

  const onSubmit = () => {
    let finalChanges = {};
    for (const key in change) {
      if (change[key] !== "") {
        finalChanges[key] = change[key];
      }
    }
    dispatch(putPlayer(id, finalChanges));
  };

  const cancel = () => {
    setState(false);
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)} className={s.form}>
        <div className={s.description}>
          <input
            onChange={(e) => {
              setChange({
                ...change,
                name: e.target.value,
              });
            }}
            value={change.name}
            className={s.input}
            type="text"
            placeholder="Cambiar nombre"
          />
          <input
            onChange={(e) => {
              setChange({
                ...change,
                age: e.target.value,
              });
            }}
            value={change.age}
            className={s.input}
            type="text"
            placeholder="Cambiar edad"
          />
          <input
            onChange={(e) => {
              setChange({
                ...change,
                squad_number: e.target.value,
              });
            }}
            value={change.squad_number}
            className={s.input}
            type="text"
            placeholder="Cambiar dorsal"
          />
          <select
            onChange={(e) => onClick(e)}
            className={s.input}
            name="position"
            id="position"
          >
            <option value="">Selecciona la POS</option>
            <option value="ataque">ATQ</option>
            <option value="medio">MED</option>
            <option value="defensa">DEF</option>
          </select>
          <input
            onChange={(e) => {
              setChange({
                ...change,
                nationality: e.target.value,
              });
            }}
            value={change.nationality}
            className={s.input}
            type="text"
            placeholder="Cambiar nacionalidad"
          />
          <button type="submit" className={s.button}>
            Guardar
          </button>
          <button onClick={cancel} className={s.button}>
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
}
