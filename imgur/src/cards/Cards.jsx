import React, { Component } from 'react';
import LikeView from './LikeView';
import './card-style.css';
import Image from './Image'


function Cards(props){
    return (
      <div className="container custom-container">
        <div className="row">
          <div className="col-md-3">
            <div className="card text-center shadow">
              <Image imgsrc={props.imgsrc} />

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
          
        </div>
      </div>
    );
  
}

export default Cards;
