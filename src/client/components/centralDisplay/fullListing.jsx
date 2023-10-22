// this component is where restaurants and food banks can talk to each other about
// a specific listing

import React, { useState, useEffect } from 'react';

function FullListing() {
  const dummyComments = [
    {
      comment: 'Hello',
      user: 'Perkins',
    },
    {
      comment: 'Thank you',
      user: 'Grove City Food Pantry',
    },
  ];

  const [comments, setComments] = useState(dummyComments);

  const commentElements = [];

  comments.forEach((el, index) => {
    commentElements.push(
      <div className="comment-div">
        <p>{el.comment}</p>
        <p>{el.user}</p>
      </div>,
    );
  });

  return (
    <div className="full-listing-div" action="/comment" method="post">
      <h3 className="full-listing-header">Listing Name</h3>
      <form className="comment-form">
        <input type="text-area" />
        <button type="submit">Post</button>
      </form>
      <div className="comments-container-div">
        {commentElements}
      </div>
    </div>
  );
}

export default FullListing;
