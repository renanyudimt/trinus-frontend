import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  user: false
}

export const Context = createContext(initialState);

function Authentication({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      { children }
    </Context.Provider>
  )
}

export default Authentication;