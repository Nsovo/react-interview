import React from 'react';

class Shoe extends React.Component{
	_handleClick () {
		const shoe = {id:this.props.id,
					brand: this.props.brand,
					name: this.props.name,
					price:this.props.price};
		this.props.onShoeSelect(shoe);
}

	render(){
		return(
				<div className="row">
					<div className="col s8 shoeList">
						<p>{this.props.brand} > {this.props.name}
						{(this.props.price).toFixed(2)}
						</p>
						<div className="cart">
							<a className="orangeLink" onClick={this._handleClick.bind(this)} href="#"> Add to cart</a>
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