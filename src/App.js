import Loading from 'components/Loading/Loading';
import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const Unauthenticated = lazy(() => import('routers/Unauthenticated/Unauthenticated'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense delayMs={500} fallback={<Loading />}>
        <Unauthenticated />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
