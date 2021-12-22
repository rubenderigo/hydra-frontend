import { useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';

import SessionController from 'networking/controllers/SessionController';
import { useAuth } from 'context/UserContext';
import { getSession } from 'helpers/session';

export const useSingUp = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
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
      await trackPromise(SessionController.signUp(formData));
      history.push('/terminos-y-condiciones');
    } catch (requestError) {
      setError(true);
    }
  };

  return { onSubmit, error, promiseInProgress };
};

export const useSingIn = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const { promiseInProgress } = usePromiseTracker();

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append('username', values.username);
    formData.append('password', values.password);

    try {
      await trackPromise(SessionController.signIn(formData));
      history.push('/inicio');
    } catch (requestError) {
      setError(true);
    }
  };

  return { onSubmit, error, promiseInProgress };
};

export const useAccount = () => {
  const { user, setState } = useAuth();

  const get = async () => {
    const { userId, token } = getSession();
    const response = await SessionController.getAccount(
      userId,
      token
    );

    const data = await response.data

    setState((previousState) => {
      return {
        ...previousState,
        isAuthenticated: true,
        user: data,
      };
    });
  }

  get()
  return { user };
};
