import React from 'react';
import data from '../dataSet';
import Card from './Cards';

function createCard(dataInstance) {
  return (
    <Card
      id={dataInstance.id}
      imgsrc={dataInstance.imgURL}
      title={dataInstance.title}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">IMGUR</h1>
      {data.map(createCard)}
    </div>
  );
}

export default App;
