// center display component

import React from 'react';
import ListingPreview from './listingPreview';
import FullListing from './fullListing';
import PostListing from './postListing';
import OwnListings from './ownListings';

function CentralDisplay({ display, listings, displayFullListing }) {
  if (display === 'allListings') {
    const listingPreviewArray = [];

    listings.forEach((elem, i) => {
      listingPreviewArray.push(<ListingPreview
        title={elem.title}
        body={elem.body}
        key={`listingPreview ${i}`}
        displayFullListing={displayFullListing}
      />);
    });

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

  if (display === 'ownListings') {
    return (
      <OwnListings />
    );
  }
}


export default CentralDisplay;
