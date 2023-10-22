// center display component

import React from 'react';
import ListingPreview from './listingPreview';
import FullListing from './fullListing';
import PostListing from './postListing';

function CentralDisplay({
  display, listings, displayFullListing, myListings,
}) {
  // what is displayed in this component is different depending on state
  if (display === 'allListings' || display === 'ownListings') {
    // this function creates an array of componenets

    const createDisplayArray = (data) => {
      const result = [];

      data.forEach((elem, i) => {
        result.push(<ListingPreview
          title={elem.title}
          body={elem.body}
          key={`listingPreview ${i}`}
          displayFullListing={displayFullListing}
        />);
      });

      return result;
    };

    const listingPreviewArray = (display === 'allListings') ? createDisplayArray(listings) : createDisplayArray(myListings);

    return (
      <div className="central-display-holder">
        <h2>This is the central display.</h2>
        <div className="central-display">
          {listingPreviewArray}
        </div>
      </div>
    );
  }

  if (display === 'fullListing') {
    return (
      <FullListing />
    );
  }

  if (display === 'postListing') {
    return (
      <PostListing />
    );
  }
}


export default CentralDisplay;
