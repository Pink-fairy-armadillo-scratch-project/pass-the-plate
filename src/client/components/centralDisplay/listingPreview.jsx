import React from 'react';

function ListingPreview({ elem, displayFullListing }) {
  return (
    <div className="listing-preview">
      <h3>{elem.title}</h3>
      <br />
      <p>{elem.body}</p>
      <br />
      <button type="button" onClick={() => displayFullListing(elem)}>View full listing</button>
    </div>
  );
}

export default ListingPreview;
