import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const OnboardingPage = lazy(() => import('pages/OnboardingPage'));
const SingInPage = lazy(() => import('pages/SingInPage'));
const SingUpPage = lazy(() => import('pages/SingUpPage'));

const Unauthenticated = () => {
  return (
    <Switch>
      <Route exact path="/iniciar-sesion">
        <SingInPage />
      </Route>
      <Route exact path="/registro">
        <SingUpPage />
      </Route>
      <Route exact path="/">
        <OnboardingPage />
      </Route>
    </Switch>
  );
};

export default Unauthenticated;
