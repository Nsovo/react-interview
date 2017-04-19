import React from 'react';
import {countByKey} from '../utils';

class Facet extends React.Component {
	render(){
		let items  = countByKey(this.props.items);

		return(
			<div>
			<ul>
			{items.map((item,i) =>{
				return	<li key={i} data={item} onClick={()=> 
					this.props.onFacetSelect(item)} >{item.brand} ({item.count})</li>
			})
		}
			</ul>
			</div>);
	}
}

Facet.propTypes = {
	items: React.PropTypes.array.isRequired,
	onFacetSelect: React.PropTypes.func
};

export default Facet;