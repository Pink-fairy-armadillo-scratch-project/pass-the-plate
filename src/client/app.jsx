// the heart of the homepage

import React from 'react';
// import Login from './components/login';
import Sidebar from './components/sidebar';
import CentralDisplay from './components/centralDisplay';

function App() {
  return (
    <>
      <h1>Pass the Plate</h1>
      {/* <Login /> */}
      <Sidebar />
      <CentralDisplay />
    </>
  );
}

export default App;
