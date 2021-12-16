import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const OnboardingPage = lazy(() => import('pages/OnboardingPage'));

const Unauthenticated = () => {
  return (
    <Switch>
      <Route exact path="/">
        <OnboardingPage />
      </Route>
    </Switch>
  );
};

export default Unauthenticated;
