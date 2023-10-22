/* eslint-disable react/jsx-no-bind */
// the heart of the homepage

import React, { useState, useEffect } from 'react';
// import Login from './components/login';
import Sidebar from './components/sidebar';
import CentralDisplay from './components/centralDisplay/centralDisplay';

function App() {
  // this is the main component
  // most of state is stored in it
  // most of the functions that are used in the front end are in it

  const [listings, setListings] = useState([]);
  const [myListings, setMyListings] = useState([]);

  // const listingArr = [
  //   {
  //     title: 'Listing 1',
  //     body: 'this is my listing',
  //   },
  //   {
  //     title: 'Listing 2',
  //     body: 'this is my listing',
  //   },
  //   {
  //     title: 'Listing 3',
  //     body: 'this is my listing',
  //   },
  //   {
  //     title: 'Listing 4',
  //     body: 'this is my listing',
  //   },
  // ];

  // get the listings for your zip code
  useEffect(() => {
    fetch('/listings')
      .then((data) => data.json())
      .then((data) => {
        setListings(data);
        const newMyListings = [];
        data.forEach((el) => {
          if (el.user === 'Jordan') newMyListings.push(el);
        });
        setMyListings(newMyListings);
      })
      .catch((err) => console.log(err));
  }, []);


  const [display, setDisplay] = useState('allListings');
  // display states: allListings, fullListing, postListing, ownListings
  // this piece of state and the associated display functions control
  // what is being shown in the central area of the home page
  function displayAllListings() {
    setDisplay('allListings');
  }

  function displayFullListing() {
    setDisplay('fullListing');
  }

  function displayPostListing() {
    setDisplay('postListing');
  }

  function displayOwnListings() {
    setDisplay('ownListings');
  }

  return (
    <>
      <h1>Pass the Plate</h1>
      <div className="container">
        <Sidebar
          displayOwnListings={displayOwnListings}
          displayPostListing={displayPostListing}
          displayAllListings={displayAllListings}
        />
        <CentralDisplay
          listings={listings}
          display={display}
          displayFullListing={displayFullListing}
          myListings={myListings}
        />
      </div>
    </>
  );
}

export default App;
