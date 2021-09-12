import React, { Component } from 'react';
import './productList.css';
import '../../App.css';


class productList extends Component {
  render() {
    return (
    <div className="col-3-desktop">
      <div className="card"> 
        <img className="fullwidth" src={this.props.imageUrl} alt={this.props.name}/>
        <h5> {this.props.name.length > 30 ?`${this.props.name.substring(0, 30)}...` : this.props.name}</h5>
        { this.props.retailPrice !== 0 &&
          <del className="strikethrough">${this.props.retailPrice}</del>     
        }   
        <p className="price">${this.props.salePrice}</p>
        {this.props.quantityAvailable === 'sold out' &&
        <div className="stock">{this.props.quantityAvailable} </div>
        }
      </div>
      </div>
    );
  }
}

export default productList;