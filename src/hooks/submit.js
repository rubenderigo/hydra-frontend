import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';

import SessionController from 'networking/controllers/SessionController';

export const useSubmit = (action) => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const { promiseInProgress } = usePromiseTracker();

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append('username', values.username);
    formData.append('password', values.password);

    try {
      if (action === 'sign_up') {
        formData.append('email', values.email);
        formData.append('name', values.name);
        formData.append('surname', values.lastname);
        formData.append('birth_date', values.dateBirth);
        formData.append('password_confirmation', values.password);
        await trackPromise(SessionController.signUp(formData));
        history.push('/terminos-y-condiciones');
        return;
      }

      await trackPromise(SessionController.signIn(formData));
      history.push('/inicio');
      return;
    } catch (requestError) {
      setError(true);
    }
  };

  return { onSubmit, error, promiseInProgress };
};
