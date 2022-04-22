import {
  GET_ALL_TEAMS,
  GET_ALL_PLAYERS_TEAM,
  PUT_PLAYER,
  DELETE_PLAYER,
  PUT_TEAM,
  DELETE_TEAM,
  SEARCH_TEAM,
  SEARCH_PLAYER,
  CREATE_TEAM, 
  CREATE_PLAYER,
} from "./constants";
import axios from "axios";

export function getAllTeams() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3002/teams")
      .then((res) => dispatch({ type: GET_ALL_TEAMS, payload: res.data }))
      .catch((error) => console.error(error));
  };
}

export function getAllPlayersTeam(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3002/teams/${id}`)
      .then((res) =>
        dispatch({ type: GET_ALL_PLAYERS_TEAM, payload: res.data.Players })
      );
  };
}

export function putPlayer(id, payload) {
  return function (dispatch) {
    return axios
      .put(`http://localhost:3002/players/${id}`, payload)
      .then((res) => dispatch({ type: PUT_PLAYER, payload }));
  };
}

export function deletePlayer(id) {
  return function (dispatch) {
    return axios
      .delete(`http://localhost:3002/players/${id}`)
      .then(() => dispatch({ type: DELETE_PLAYER, payload: id }));
  };
}

export function putTeam(id, payload) {
  return function (dispatch) {
    return axios
      .put(`http://localhost:3002/teams/${id}`, payload)
      .then(() => dispatch({ type: PUT_TEAM, payload }));
  };
}

export function deleteTeam(id){
  return function (dispatch){
    return axios.delete(`http://localhost:3002/teams/${id}`)
    .then(()=> dispatch({type: DELETE_TEAM, payload: id}))
  }
}

export function searchTeam (search){
  return function(dispatch){
    return axios.get(`http://localhost:3002/teams/search?name=${search}`)
    .then((res) => dispatch({type: SEARCH_TEAM, payload: res.data}))
  }
}

export function searchPlayer (search){
  return function(dispatch){
    return axios.get(`http://localhost:3002/players/search?name=${search}`)
    .then((res) => dispatch({type: SEARCH_PLAYER, payload: res.data}))
  }
}

export function createTeam (team) {
  return function(dispatch){
    axios.post("http://localhost:3002/teams", team)
    .then((res)=>dispatch({type: CREATE_TEAM, payload: res}))
  }
} 

export function createPlayer (player, teamId) {
  return function(dispatch){
    return axios.post("http://localhost:3002/players", player)
    .then(res => {
      axios.post(`http://localhost:3002/teams/${teamId}/player/${res.data.id}`)
      .then(res => dispatch({type: CREATE_PLAYER, payload: res}))
    })
  }
}

