import {GET_ALL_TEAMS, GET_ALL_PLAYERS_TEAM} from "../actions/constants";

const initialState = {
  teams: [],
  players: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_TEAMS:
      return {
        ...state,
        teams: action.payload
      }
    
    case GET_ALL_PLAYERS_TEAM:
      return {
        ...state,
        players: action.payload
      }  

    default:
      return state;
  }
}
