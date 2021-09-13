import React from 'react';
import './metadata.css';
import '../../App.css';

const metada = (props) => {
  return (
    <div>
       <div className="metadata">
        <p data-testid="meta-data"> showing: {props.totalItem}  {props.query} items | page {props.currentPage} of {props.totalPage} </p>
      </div>
    </div>
  );
};

export default metada;
