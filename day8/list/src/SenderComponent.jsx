
import React from 'react';
import ReceiverComponent from './ReceiverComponent';

const SenderComponent = () => {
  return (
    <div>
      <h2>Sender Component</h2>
      <ReceiverComponent name="John Doe" age={30} />
    </div>
  );
};

export default SenderComponent;