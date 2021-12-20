const KEY = 'user';

export const getSession = () => JSON.parse(localStorage.getItem(KEY));

export const saveSession = (user) => localStorage.setItem(KEY, JSON.stringify(user));

export const clearSession = () => localStorage.removeItem(KEY);

export const isStoredSession = getSession() && Object.keys(getSession()).length > 0;
