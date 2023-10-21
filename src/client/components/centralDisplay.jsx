// center display component

import React from 'react';
import ListingPreview from './listingPreview';

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
      <p>hello world</p>
    );
  }
  // else if return ()
}


export default CentralDisplay;
