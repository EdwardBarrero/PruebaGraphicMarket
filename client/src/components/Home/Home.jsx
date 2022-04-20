import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTeams } from "../../actions/index";
import TeamCard from "../TeamCard/TeamCard";
import s from "./Home.module.css";
import img from "../../img/fondo.jpg";

export default function Home() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(getAllTeams());
  }, [dispatch]);
  return (
    <>
      <img className={s.background} src={img} alt="img not found" />
      <div className={s.home}>
        {teams?.map((team) => (
          <TeamCard
            key={team}
            name={team.name}
            league={team.league}
            country={team.country}
          />
        ))}
      </div>
    </>
  );
}
