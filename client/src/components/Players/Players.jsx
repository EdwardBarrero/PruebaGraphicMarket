import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlayersTeam } from "../../actions/index";
import PlayerCard from "../PlayerCard/PlayerCard";

export default function Players() {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players);

  useEffect(() => {
    dispatch(getAllPlayersTeam(1));
  }, [dispatch]);

  return (
    <div>
      {players?.map((p) => (
        <div>
            <PlayerCard
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
