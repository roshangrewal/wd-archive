import React from 'react';

function Image(props) {
  return (
    <div className="overflow">
      <img src={props.image} alt="img-1" className="card-img-top" />
    </div>
  );
}

export default Image;
