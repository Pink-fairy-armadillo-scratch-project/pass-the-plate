// the component that is in the center display after the post listing button is clicked
// it enables restaurants to list food items they don't want or won't be able to use

import React from 'react';

function PostListing() {
  return (
    <div className="post-listing-div">
      <h3 className="post-listing-header">Create a Listing</h3>
      <form className="post-listing-form" method="post">
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Description:
          <input type="text-area" name="listing_body" />
        </label>
        <button type="submit" formAction="/postlisting">Post</button>
      </form>
    </div>
  );
}

export default PostListing;
