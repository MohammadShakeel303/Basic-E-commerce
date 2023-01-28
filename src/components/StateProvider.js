
//setup data layer
//we need this to track cart

import { createContext, useContext, useReducer } from "react";

//this data layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialState, children}) => (
  <StateContext.Provider value= {useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


export const useStateValue = () => useContext(StateContext);
//this all staff is like global variable that can passed around the react app.
//Instead of passing props from grandparent to parent to child ....