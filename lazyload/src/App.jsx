import {lazy, Suspense} from 'react';

function App(){
  const Dash=lazy(()=>import("./components/Dashboard"));
  return(
    <Suspense fallback={<div><h1>Loading....</h1></div>}>
      <Dash/>
    </Suspense>
  )
};

export default App;