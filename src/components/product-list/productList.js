import React, { Component } from 'react';
import './productList.css';
import '../../App.css';


class productList extends Component {
  render() {
    return (
    <div className="col-3-desktop">
      <div className="card"> 
        <img data-testid="product-image" className="fullwidth" src={this.props.imageUrl} alt={this.props.name}/>
        <h5 data-testid="product-name">  {this.props.name.length > 30 ?`${this.props.name.substring(0, 30)}...` : this.props.name}</h5>
        { this.props.retailPrice !== 0 &&
          <del data-testid="product-retail-price" className="strikethrough">${this.props.retailPrice}</del>     
        }   
        <p data-testid="product-sale-price" className="price">${this.props.salePrice}</p>
        {this.props.quantityAvailable === 'sold out' &&
        <div data-testid="product-quantity" className="stock">{this.props.quantityAvailable} </div>
        }
      </div>
      </div>
    );
  }
}

export default productList;