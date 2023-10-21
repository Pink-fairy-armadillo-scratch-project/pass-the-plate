import React from 'react';

function ListingPreview({ title, body, displayFullListing }) {
  return (
    <div>
      <h3>{title}</h3>
      <br />
      <p>{body}</p>
      <br />
      <button type="button" onClick={() => displayFullListing()}>View full listing</button>
    </div>
  );
}

export default ListingPreview;
