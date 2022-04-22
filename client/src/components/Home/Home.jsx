import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTeams, searchPlayer } from "../../actions/index";
import TeamCard from "../TeamCard/TeamCard";
import PlayerCard from "../PlayerCard/PlayerCard";
import s from "./Home.module.css";
import img from "../../img/fondo.jpg";
import SearchBar from "../SearchBar/SearchBar";

export default function Home() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);
  const searchPlayers = useSelector((state) => state.searchPlayers)

  useEffect(() => {
    dispatch(getAllTeams());
    dispatch(searchPlayer(""));
  }, [dispatch]);
  return (
    <>
      <img className={s.background} src={img} alt="img not found" />
      <div className={s.container}>
        <div className={s.home}>
          <SearchBar />
          {teams?.map((team) => (
            <TeamCard
              id={team.id}
              key={team.id}
              name={team.name}
              league={team.league}
              country={team.country}
            />
          ))}
        </div>
        <div className={s.players}>
        {searchPlayers?.map((p) => (
            <PlayerCard
            key={p.id}
            id={p.id}
            name={p.name}
            age={p.age}
            squad_number={p.squad_number}
            position={p.position}
            nationality={p.nationality}
            />
          ))}
        </div>
      </div>
    </>
  );
}
