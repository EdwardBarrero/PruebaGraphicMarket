import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlayersTeam } from "../../actions/index";
import PlayerCard from "../PlayerCard/PlayerCard";
import s from "./Players.module.css"

export default function Players({id}) {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players);

  useEffect(() => {
    dispatch(getAllPlayersTeam(id));
  }, [dispatch]);

  return (
    <div className={s.players}>
      {players?.map((p) => (
        <div>
            <PlayerCard
                key={p.id}
                id={p.id}
                name={p.name}
                age={p.age}
                squad_number={p.squad_number}
                position={p.position}
                nationality={p.nationality}
            />        
        </div>
      ))}
    </div>
  );
}
