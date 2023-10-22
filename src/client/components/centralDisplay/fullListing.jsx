import React from 'react';

function FullListing() {
  return (
    <div className="full-listing-div" action="/comment" method="post">
      <h3 className="full-listing-header">Listing Name</h3>
      <form className="comment-form">
        <input type="text-area" />
        <button type="submit">Post</button>
      </form>
      {/* Place for previously posted comments */}
    </div>
  );
}

export default FullListing;
