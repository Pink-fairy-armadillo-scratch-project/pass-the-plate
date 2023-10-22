/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Sidebar({ displayPostListing, displayOwnListings, displayAllListings }) {
  return (
    <div className="sidebar">
      <h4>Sidebar</h4>
      <form>
        <label>
          Zipcode
          <input type="text" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button type="button" onClick={() => { displayAllListings(); }}>Local Listings</button>
      <button type="button" onClick={() => { displayPostListing(); }}>Post Listing</button>
      <button type="button" onClick={() => { displayOwnListings(); }}>My Listings</button>
      <button type="button">Messages</button>
    </div>
  );
}

export default Sidebar;
