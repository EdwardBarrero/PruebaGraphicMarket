import { GET_ALL_TEAMS, GET_ALL_PLAYERS_TEAM } from "./constants";
import  axios  from "axios";

export function getAllTeams() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3002/teams")
      .then((res) => dispatch({ type: GET_ALL_TEAMS, payload: res.data }))
      .catch((error) => console.error(error))
  };
}

export function getAllPlayersTeam(id){
  return function (dispatch) {
    return axios.get(`http://localhost:3002/teams/${id}`)
    .then(res => dispatch({type:GET_ALL_PLAYERS_TEAM, payload: res.data.Players}))
  }
}
