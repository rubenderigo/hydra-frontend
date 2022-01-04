import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';

import SessionController from 'networking/controllers/SessionController';
import { useAuth } from 'context/UserContext';
import { getSession } from 'helpers/session';

export const useSingUp = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const { setState } = useAuth();
  const { promiseInProgress } = usePromiseTracker();

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append('username', values.username);
    formData.append('password', values.password);
    formData.append('email', values.email);
    formData.append('name', values.name);
    formData.append('surname', values.lastname);
    formData.append('birth_date', values.dateBirth);
    formData.append('password_confirmation', values.password);

    try {
      const response = await trackPromise(SessionController.signUp(formData));
      history.push('/terminos-y-condiciones');
      setState((previousState) => {
        return {
          ...previousState,
          user: response.user,
          isAuthenticated: true,
          typeUser: response.typeUser,
        };
      });
    } catch (requestError) {
      setError(true);
    }
  };

  return { onSubmit, error, promiseInProgress };
};

export const useSingIn = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const { setState } = useAuth();
  const { promiseInProgress } = usePromiseTracker();

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append('username', values.username);
    formData.append('password', values.password);

    try {
      const response = await trackPromise(SessionController.signIn(formData));
      history.push('/');
      setState((previousState) => {
        return {
          ...previousState,
          user: response.user,
          isAuthenticated: true,
          typeUser: response.typeUser,
        };
      });
    } catch (requestError) {
      setError(true);
    }
  };

  return { onSubmit, error, promiseInProgress };
};

export const useSingOut = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const { promiseInProgress } = usePromiseTracker();
  const { setState } = useAuth();

  const singOut = useCallback(async () => {
    const { token } = getSession();
    try {
      await trackPromise(SessionController.singOut(token));
      history.push('/');
      setState((previousState) => {
        return {
          ...previousState,
          isAuthenticated: false,
          user: null,
          typeUser: null,
        };
      });
    } catch (requestError) {
      setError(true);
    }
  }, []);

  return { singOut, error, promiseInProgress };
};
