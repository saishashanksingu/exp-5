import {lazy, Suspense} from 'react';

function delayedImport(factory, ms = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      factory().then(resolve, reject);
    }, ms);
  });
}

function App(){
  const Dash = lazy(() => delayedImport(() => import("./components/Dashboard"), 2000));
  return(
    <Suspense fallback={<div><h1>Loading....</h1></div>}>
      <Dash/>
    </Suspense>
  )
};

export default App;