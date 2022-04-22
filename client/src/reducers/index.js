import {
  GET_ALL_TEAMS,
  GET_ALL_PLAYERS_TEAM,
  DELETE_PLAYER,
  SEARCH_TEAM,
  SEARCH_PLAYER,
} from "../actions/constants";

const initialState = {
  teams: [],
  players: [],
  searchPlayers: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };

    case GET_ALL_PLAYERS_TEAM:
      return {
        ...state,
        players: action.payload,
      };

    case DELETE_PLAYER:
      let newPlayers = state.players?.filter((p) => {
        return p.id !== action.payload;
      });
      return {
        ...state,
        players: newPlayers,
      };

    case SEARCH_TEAM:
      return {
        ...state,
        teams: action.payload,
      };

    case SEARCH_PLAYER:
      return {
        ...state,
        searchPlayers: action.payload,
      };


    default:
      return state;
  }
}
