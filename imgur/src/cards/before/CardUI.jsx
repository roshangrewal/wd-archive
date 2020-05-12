import React, { useState } from 'react';
import './card-style.css';

const Card = (props) => {
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
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="img-1" className="card-img-top" />
      </div>
      <div className="card-body">
        {/* <h5 className="card-title">{props.title}</h5> */}
        <p className="card-text ">Lorum Ipsum Lorum Ipsum</p>
        {/* <a href="#" className="btn btn-outline-success"> */}
        {/* Click Here
        </a> */}
        <div class="comment-main flex-container text-secondary">
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
      </div>
    </div>
  );
};

export default Card;
