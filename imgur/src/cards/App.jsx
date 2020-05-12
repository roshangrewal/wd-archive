import React from 'react';
import data from '../dataSet';
import Card from './Cards';

function createCard(dataInstance) {
  return (
    <div className="col-md-3">
      <Card
        id={dataInstance.id}
        img={dataInstance.imgURL}
        title={dataInstance.title}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">IMGUR</h1>
      {/* {data.map(createCard)} */}
      {data[0].map(createCard)}
      {data[1].map(createCard)}
      {data[2].map(createCard)}
      {data[3].map(createCard)}
    </div>
  );
}

export default App;
