
import React from 'react';

const ReceiverComponent = ({ name, age }) => {
  return (
    <div>
      <h2>Receiver Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default ReceiverComponent;