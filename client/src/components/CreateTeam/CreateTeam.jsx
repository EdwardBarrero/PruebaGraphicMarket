import React, {useState} from "react";
import s from "./CreateTeam.module.css";
import {useDispatch} from "react-redux"
import {createTeam} from "../../actions/index"

export default function CreateTeam() {
  const [inputs, setInputs] = useState({})
  const dispatch = useDispatch()

  const onChangeName = (e) => {
      setInputs({...inputs, name: e.target.value})
  }
  const onChangeLeague = (e) => {
      setInputs({...inputs, league: e.target.value})
  }
  const onChangeCountry = (e) => {
      setInputs({...inputs, country: e.target.value})
  }

  const onSubmit= () =>{
    dispatch(createTeam(inputs))
  }
    return (
    <form onSubmit={onSubmit} className={s.form}>
      <div className={s.label}>
        <label htmlFor="nombre">Nombre</label>
        <input onChange={onChangeName} className={s.input} type="text" name="nombre" id="nombre" />
      </div>
      <div className={s.label}>
        <label htmlFor="liga">Liga</label>
        <input onChange={onChangeLeague} className={s.input} type="text" name="liga" id="liga" />
      </div>
      <div className={s.label}>
        <label htmlFor="pais">País</label>
        <input onChange={onChangeCountry} className={s.input} type="text" name="pais" id="pais" />
      </div>
      <button className={s.button}>CREAR</button>
    </form>
  );
}
