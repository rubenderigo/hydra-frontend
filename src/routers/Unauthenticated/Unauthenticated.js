import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const OnboardingPage = lazy(() => import('pages/OnboardingPage'));
const SingInPage = lazy(() => import('pages/SingInPage'));

const Unauthenticated = () => {
  return (
    <Switch>
      <Route exact path="/iniciar-sesion">
        <SingInPage />
      </Route>
      <Route exact path="/">
        <OnboardingPage />
      </Route>
    </Switch>
  );
};

export default Unauthenticated;
