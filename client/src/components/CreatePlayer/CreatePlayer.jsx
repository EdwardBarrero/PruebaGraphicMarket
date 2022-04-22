import React, { useState, useEffect } from "react";
import s from "./CreatePlayer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createPlayer, getAllTeams } from "../../actions";

export default function CreatePlayer() {
  const [inputs, setInputs] = useState({});
  const [team, setTeam] = useState();

  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(getAllTeams());
  }, [dispatch]);

  const onChangesName = (e) => {
    setInputs({ ...inputs, name: e.target.value });
  };
  const onChangesAge = (e) => {
    setInputs({ ...inputs, age: e.target.value });
  };
  const onChangesSquadNumber = (e) => {
    setInputs({ ...inputs, squad_number: e.target.value });
  };
  const onChangesNationality = (e) => {
    setInputs({ ...inputs, nationality: e.target.value });
  };
  const onChangesPosition = (e) => {
    setInputs({ ...inputs, position: e.target.value });
  };
  const onChangesTeam = (e) => {
    setTeam(e.target.value);
  };

  const onSubmit = () => {
    dispatch(createPlayer(inputs, team));
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <div className={s.request}>
        <label className={s.label} htmlFor="name">
          NOMBRE
        </label>
        <input
          className={s.input}
          onChange={(e) => onChangesName(e)}
          type="text"
          name="name"
        />
      </div>
      <div className={s.request}>
        <label className={s.label} htmlFor="age">
          EDAD
        </label>
        <input
          className={s.input}
          onChange={(e) => onChangesAge(e)}
          type="text"
          name="age"
        />
      </div>
      <div className={s.request}>
        <label className={s.label} htmlFor="squad_number">
          DORSAL
        </label>
        <input
          className={s.input}
          onChange={(e) => onChangesSquadNumber(e)}
          type="text"
          name="squad_number"
        />
      </div>
      <div className={s.request}>
        <label className={s.label} htmlFor="position">
          POSICION
        </label>
        <select
          className={s.input}
          onChange={(e) => onChangesPosition(e)}
          name="position"
          id="position"
        >
          <option value="">Seleccione posición</option>
          <option value="ataque">ATQ</option>
          <option value="medio">MED</option>
          <option value="defensa">DEF</option>
        </select>
      </div>
      <div className={s.request}>
        <label className={s.label} htmlFor="nationality">
          NACIONALIDAD
        </label>
        <input
          className={s.input}
          onChange={(e) => onChangesNationality(e)}
          type="text"
          name="nationality"
        />
      </div>
      <div className={s.request}>
        <label className={s.label} htmlFor="">
          EQUIPO
        </label>
        <select
          className={s.input}
          onChange={onChangesTeam}
          name="team"
          id="team"
        >
          <option value="">Selecione un equipo</option>
          {teams?.map((team) => (
            <option value={`${team.id}`}>{team.name}</option>
          ))}
        </select>
      </div>
      <button type="submit">Crear</button>
    </form>
  );
}
