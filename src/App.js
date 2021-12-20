import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Loading from 'components/Loading/Loading';
import { useAuth } from 'context/UserContext';

const Authenticated = lazy(() => import('routers/Authenticated/Authenticated'));
const Unauthenticated = lazy(() => import('routers/Unauthenticated/Unauthenticated'));

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Suspense delayMs={500} fallback={<Loading />}>
        {isAuthenticated ? <Authenticated /> : <Unauthenticated />}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
