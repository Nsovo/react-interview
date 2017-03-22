import React from 'react';
import {countByKey} from '../utils';

class Facet extends React.Component {
	render(){
		const brandList = []
		const listItems =[]


		this.props.items.map((item) =>{
				brandList.push(item.brand)				
			})

		let lastBrand =''
		let count= 0
		brandList.map((item) =>{

			if(item == lastBrand){
				count +=1
    			listItems.pop()
              }			
			else
				count=1

			listItems.push({brand:item,count:count})
			lastBrand =item

		})

		return(
			<div>
			<ul>
			{listItems.map((item,i) =>{
				return	<li key={i} data= {item} onClick={() => 
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