import React from 'react';

class CartSummary extends React.Component {

	render(){
		let cart =[]
		let totalCost= 0
		let totalItems =0
		this.props.cart.map((item,i) => {
			totalItems= i +1
			totalCost += item.price;
return cart ={ totalItems: totalItems,
			totalCost:totalCost}
		});
		

			return(
				<div>
				<span className="ItemCount" id="ItemCount">{cart.totalItems}</span>
				<span className="TotalCost" id="TotalCost">{(cart.totalCost || 0).toFixed(2)}</span>

				</div>
				)
			}
		}

		CartSummary.propTypes = {
			cart: React.PropTypes.array.isRequired
		};

		export default CartSummary;