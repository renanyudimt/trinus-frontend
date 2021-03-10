const Reducer = (state, action) => {
  switch(action.type) {
    case "SET_USER":
      return {
        user: action.payload
      }

    case "CLEAR":
      return {
        user: false
      };

    default: 
      return state;
  }
}

export default Reducer;