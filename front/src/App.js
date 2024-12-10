import React from 'react';
import AllRoutes from './components/AllRoutes/AllRoutes';

const App = () => {
  console.log("Rendering App at:", new Date().toISOString());


  return (
    <>
      <AllRoutes />
    </>
  );
};

export default App;
