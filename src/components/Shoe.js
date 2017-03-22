import React from 'react';

class Shoe extends React.Component{
	render(){
		return(
			<div>
			<span>{this.props.brand} > {this.props.name}
			<br />
			{(this.props.price).toFixed(2)}
			</span>
			 <span><a onClick={() =>this.props.onShoeSelect({id:this.props.id,brand: this.props.brand,name: this.props.name,price:this.props.price}) } /></span>
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