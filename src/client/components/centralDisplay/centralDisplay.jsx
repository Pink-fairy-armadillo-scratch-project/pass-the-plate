// center display component

import React from 'react';
import ListingPreview from './listingPreview';
import FullListing from './fullListing';
import PostListing from './postListing';

function CentralDisplay({
  display, listings, displayFullListing, myListings, whichListing,
}) {
  // what is displayed in this component is different depending on state

  if (display === 'allListings' || display === 'ownListings') {
    // if display is either of these two values, a grid of listing
    // previews will be rendered by this component

    const createDisplayArray = (data) => {
      // input: an array that is taken from state
      // output: an array of components

      const result = [];

      data.forEach((elem, i) => {
        result.push(<ListingPreview
          elem={elem}
          key={`listingPreview ${i}`}
          displayFullListing={displayFullListing}
        />);
      });

      return result;
    };

    // depending on display state, pass a different piece of state into the function
    const listingPreviewArray = (display === 'allListings') ? createDisplayArray(listings) : createDisplayArray(myListings);

    return (
      <div className="central-display-holder">
        <h2>Food Pickup Listings</h2>
        <div className="central-display">
          {listingPreviewArray}
        </div>
      </div>
    );
  }

  if (display === 'fullListing') {
    return (
      <FullListing whichListing={whichListing} />
    );
  }

  if (display === 'postListing') {
    return (
      <PostListing />
    );
  }
}


export default CentralDisplay;
