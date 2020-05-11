import React, { useState } from 'react';

function LikeView() {
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState(0);
  const [view, setView] = useState(0);
  function increaseLike() {
    setCount(count + 1);
  }
  function increaseComment() {
    setComment(comment + 1);
  }
  function increaseViews() {
    setView(view + 1);
  }
  return (
    <div className="comment-main flex-container text-secondary">
      <button className="comment-wrap" onClick={increaseLike}>
        Like {count}
      </button>
      <button className="comment-wrap" onClick={increaseComment}>
        Comment {comment}
      </button>
      <button className="comment-wrap" onClick={increaseViews}>
        Views {count > view ? count : view}
      </button>
    </div>
  );
}

export default LikeView;
