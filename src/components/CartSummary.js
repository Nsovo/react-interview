import React from 'react';

class CartSummary extends React.Component {



	render(){
		let totalCost= 0
		let totalItems =0

		this.props.cart.map((item,i) => {
			if(item ===0)
				return "";

			totalItems= i+1
			totalCost += item.price;
			return { totalItems: totalItems,
			totalCost:totalCost}
		});
		

			return(
					<div className="cartFont"> 
					<h5>My cart </h5>
						<div className="cartItems">
							Total items:<span  id="ItemCount">{totalItems}</span>
						</div>
						<div className="cartItems">
							Total cost R:<span  id="TotalCost">{(totalCost).toFixed(2)}</span>
						</div>
					</div>
				)
			}
		}

		CartSummary.propTypes = {
			cart: React.PropTypes.array.isRequired
		};

		export default CartSummary;