import React, { Component } from 'react';
import Card from './CardUI';
// ns1.freehosting.com;
// ns2.freehosting.com;
import img1 from '../assets/edits.png';
import img2 from '../assets/esss.jpg';
import img3 from '../assets/lss.jpg';
import img4 from '../assets/psss.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';
import img10 from '../assets/10.jpg';
import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';
import img13 from '../assets/13.jpg';
import img14 from '../assets/14.jpg';
import img15 from '../assets/15.jpg';
import img16 from '../assets/16.jpg';

class Cards extends Component {
  render() {
    return (
      <div className="container custom-container">
        <div className="row">
          <div className="col-md-3">
            <Card imgsrc={img1} title="console" />
            <Card imgsrc={img2} title="dsadjksa" />
            <Card imgsrc={img3} title="dsadjksa" />
            <Card imgsrc={img16} title="dsadjksa" />
          </div>
          <div className="col-md-3">
            <Card imgsrc={img5} title="dsadjksa" />
            <Card imgsrc={img6} title="dfsfds" />
            <Card imgsrc={img7} title="dfsfds" />
            <Card imgsrc={img8} title="dsadjksa" />
          </div>
          <div className="col-md-3">
            <Card imgsrc={img9} title="dsadjksa" />
            <Card imgsrc={img10} title="dfsfds" />
            <Card imgsrc={img11} title="dfsfds" />
            <Card imgsrc={img12} title="dsadjksa" />
          </div>
          <div className="col-md-3">
            <Card imgsrc={img13} title="dsadjksa" />
            <Card imgsrc={img14} title="dfsfds" />
            <Card imgsrc={img15} title="dfsfds" />
            <Card imgsrc={img4} title="dsadjksa" />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
