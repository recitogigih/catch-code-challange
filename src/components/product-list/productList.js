import React from 'react';
import './productList.css';
import '../../App.css';


const productList = (props) => {
  return (
    <div className="col-3-desktop">
    <div className="card"> 
      <img data-testid="product-image" className="fullwidth" src={props.imageUrl} alt={props.name}/>
      <h5 data-testid="product-name">  {props.name.length > 30 ?`${props.name.substring(0, 30)}...` : props.name}</h5>
      { props.retailPrice !== 0 &&
        <del data-testid="product-retail-price" className="strikethrough">${props.retailPrice}</del>     
      }   
      <p data-testid="product-sale-price" className="price">${props.salePrice}</p>
      {props.quantityAvailable === 'sold out' &&
      <div data-testid="product-quantity" className="stock">{props.quantityAvailable} </div>
      }
    </div>
    </div>
  );
};

export default productList;

