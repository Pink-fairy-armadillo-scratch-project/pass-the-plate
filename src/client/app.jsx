// the heart of the homepage

import React, { useState } from 'react';
// import Login from './components/login';
import Sidebar from './components/sidebar';
import CentralDisplay from './components/centralDisplay';

function App() {
  const listingArr = [
    {
      title: 'Listing 1',
      body: 'this is my listing',
    },
    {
      title: 'Listing 2',
      body: 'this is my listing',
    },
    {
      title: 'Listing 3',
      body: 'this is my listing',
    },
    {
      title: 'Listing 4',
      body: 'this is my listing',
    },
  ];
  const [listings, setListings] = useState(listingArr);
  const [display, setDisplay] = useState('allListings');
  // display states: allListings, fullListing, postListing, ownListings

  function displayFullListing(milk) {
    setDisplay('fullListing');
  }

  return (
    <>
      <h1>Pass the Plate</h1>
      <div className="container">
        {/* <Login /> */}
        <Sidebar />
        <CentralDisplay
          listings={listings}
          display={display}
          displayFullListing={displayFullListing}
        />
      </div>
    </>
  );
}

export default App;
