import React from 'react';

class CartSummary extends React.Component {

	render(){
		let cart =[]
		let totalCost= 0
		let totalItems =0

		this.props.cart.map((item,i) => {
			if(item ===0)
				return "";



			totalItems= i +1
			totalCost += item.price;
			return cart ={ totalItems: totalItems,
			totalCost:totalCost.toFixed(2)}
		});
		

			return(
				<div className="cartFont"> My cart
				<div className="cartItems">
				<div  id="ItemCount">Total items:{cart.totalItems}</div>
				<div  id="TotalCost">Total ost :{(cart.totalCost )}</div>
				</div>
				</div>
				)
			}
		}

		CartSummary.propTypes = {
			cart: React.PropTypes.array.isRequired
		};

		export default CartSummary;