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
  // this piece of state stores all the listings for a given zip code

  const [myListings, setMyListings] = useState([]);
  // this piece of state stores the listings from a given zip code that are
  // also associated with the current user

  const [whichListing, setWhichListing] = useState({});
  // this piece of state is used to tell the fullListing component what data it
  // should (1) display and (2) ask for from the server

  const [display, setDisplay] = useState('allListings');
  // display states: allListings, fullListing, postListing, ownListings
  // this piece of state and the associated display functions control
  // what is being shown in the central area of the home page

  function displayAllListings() {
    setDisplay('allListings');
  }

  function displayFullListing(target) {
    setDisplay('fullListing');
    setWhichListing(target);
  }

  function displayPostListing() {
    setDisplay('postListing');
  }

  function displayOwnListings() {
    setDisplay('ownListings');
  }

  // populate listings and myListings pieces of state with information from database
  useEffect(() => {
    fetch('/listings')
      .then((data) => data.json())
      .then((data) => {
        // set listings to the data that comes back
        setListings(data);

        // cull the listings that come back for the user who is currently logged in
        // do this by first getting the value on the username cookie and then filtering through
        // the array of data

        // create an array where each individual cookie is an element
        const cookies = [];
        let result = '';
        for (let i = 0; i < document.cookie.length; i += 1) {
          if (document.cookie[i] !== ' ') {
            result += document.cookie[i];
          } else {
            cookies.push(result);
            result = '';
          }
        }

        // making last result value consistent for below cache method
        result += ';';
        cookies.push(result);

        // creating cookie cache
        // each cookie is a property on the object
        const cache = {};
        for (let i = 0; i < cookies.length; i += 1) {
          const index = cookies[i].indexOf('=');
          cache[cookies[i].slice(0, index)] = cookies[i].slice(index + 1, -1);
        }

        // pull out the value of the username cookie
        const { username } = cache;

        // create myListings array by filtering through listings data and set it to state
        const newMyListings = [];
        data.forEach((el) => {
          if (el.username === username) newMyListings.push(el);
        });
        setMyListings(newMyListings);
      })
      .catch((err) => console.log(err));
  }, []);

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
          whichListing={whichListing}
        />
      </div>
    </>
  );
}

export default App;
