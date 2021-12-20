import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const TermsConditionsPage = lazy(() => import('pages/TermsConditionsPage'));
const HomePage = lazy(() => import('pages/HomePage'));

const Authenticated = () => {
  return (
    <Switch>
      <Route exact path="/terminos-y-condiciones">
        <TermsConditionsPage />
      </Route>
      <Route exact path="/inicio">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Authenticated;
