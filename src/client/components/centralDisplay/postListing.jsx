// the component that is in the center display after the post listing button is clicked

import React from 'react';

function PostListing() {
  return (
    <div className="post-listing-div" action="/postListing" method="post">
      <h3 className="post-listing-header">Create a Listing</h3>
      <form className="post-listing-form">
        <input type="text-area" />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostListing;