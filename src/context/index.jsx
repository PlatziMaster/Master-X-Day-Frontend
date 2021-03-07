import React, { createContext, useReducer, useContext } from 'react';
import reducer from './reducers';

export const Context = createContext({
  id: '',
  token: '',
  dispatch: () => {},
});

export const Provider = ({ children, initialState = {} }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
