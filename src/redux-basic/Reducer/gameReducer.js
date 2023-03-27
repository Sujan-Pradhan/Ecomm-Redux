const initialData = {
  game: "Cricket",
  player: "Warner",
};

const gameReducer = (state = initialData, action) => {

  const {type, payload} = action;
  switch (type) {
    case "CHANGE_GAME":
      return {
        ...state,  
        game: payload,
      };
    case "CHANGE_PLAYER":
      return {
        ...state,
        player: action.payload,
      };


    default:
      return state;
  }
  
};

export default gameReducer;
