import React from 'react';

class Shoe extends React.Component{
	render(){
		return(
			<div className="row">
			<div className="col s8 shoeList">
			<span>{this.props.brand} > {this.props.name}
			<br />
			{(this.props.price).toFixed(2)}
			</span>
			<div>
			<a className="orangeLink" href="#"> Add to cart
			</a>
			</div>
			</div>
			</div>
			)
	}
}
Shoe.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;