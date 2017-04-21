import React from 'react';
import {countByKey} from '../utils';

class Facet extends React.Component {
	constructor(props) {
	super(props)
	this.state = {items:[]}
	}

	handleClick () {
		let items  = countByKey(this.props.items);
		this.state.items.push(items)
  		this.setState({items: items});
	}

	removeItem(removeItem){
		var newItems = this.state.items.filter(function(item){
			return item !== removeItem
		});

		this.state.items.push(newItems)
  		this.setState({items: newItems});
	}
	

	render(){
		var cartList = this.state.items;

		return(
			<div> 
			<div><a className="orangeLink" id="viewCart" onClick={this.handleClick.bind(this)} href="#">
				view cart
			</a></div>
			
			{cartList.map((item,i) =>{
				return	(
					<ul key={i}>
					<li>{item.brand} | {item.name} {item.count}</li>
                    <a id="removeCart" className="orangeLink" onClick={this.removeItem.bind(this,item)} href="#"> remove from cart </a>
				</ul>)
			})
		}
			</div>);
	}
}

Facet.propTypes = {
	items: React.PropTypes.array.isRequired,
	onFacetSelect: React.PropTypes.func
};

export default Facet;