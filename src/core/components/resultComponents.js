import React from 'react';
import viam from '../../assets/images/test.png';

const ResultComponent = ({ totalAmount, result, children }) => {
  return (
    <>
      <div className="container bg-background">
        <img src={viam} alt="via logo" className="demo-image" />
        <div className="demo-result">
          {totalAmount}:<span className="demo-value">{result}</span>
        </div>
      </div>

      {children}
    </>
  );
};

export default ResultComponent;
