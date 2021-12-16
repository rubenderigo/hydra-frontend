import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import PropagateLoader from 'react-spinners/PropagateLoader';

const Unauthenticated = lazy(() =>
  import('routers/Unauthenticated/Unauthenticated')
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense delayMs={500} fallback={<PropagateLoader color={'#9a31e4'} />}>
        <Unauthenticated />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
