import React from 'react';
import './card-style.css';


const Card = (props) => {

  // const [count, setCount] = useState(0);
  // const [comment, setComment] = useState(0);
  // const [view, setView] = useState(0);
  // function increaseLike() {
  //   setCount(count + 1);
  // }
  // function increaseComment() {
  //   setComment(comment + 1);
  // }
  // function increaseViews() {
  //   setView(view + 1);
  // }

  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.image} alt="img-1" className="card-img-top" />
      </div>
      <div className="card-body">
        {/* <h5 className="card-title">{props.title}</h5> */}
        <p className="card-text ">{props.title}</p>
        {/* <a href="#" className="btn btn-outline-success"> */}
        {/* Click Here
        </a> */}
      <LikeView />  
      </div>
    </div>
  );
};

export default Card;
