// this component is where restaurants and food banks can talk to each other about
// a specific listing

import React, { useState, useEffect } from 'react';

function FullListing({ whichListing }) {
  const [comments, setComments] = useState([]);
  // this piece of state is used to store the comments

  // get the comments from the server
  useEffect(() => {
    fetch('/comments')
      .then((data) => data.json())
      .then((data) => {
        setComments(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // use the state that was updated by the fetch to create html elements with comments inside
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
      <h3 className="full-listing-header">{whichListing.title}</h3>
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
