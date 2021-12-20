import { createContext, useContext, useState } from 'react';

import { getSession, isStoredSession } from 'helpers/session';

export const initialState = {
  user: null,
  isAuthenticated: false,
  typeUser: null,
};

export const UserContext = createContext(initialState);

const loadState = () => {
  const storedSession = getSession();

  if (isStoredSession) {
    return { ...initialState, ...storedSession, isAuthenticated: true };
  }

  return initialState;
};

export const UserContextProvider = ({ children }) => {
  const [{ user, isAuthenticated }, setState] = useState(
    loadState || initialState
  );

  return (
    <UserContext.Provider value={{ user, isAuthenticated, setState }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
