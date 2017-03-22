import React from 'react';
import Shoe from './Shoe';

class ShoeList extends React.Component{

	render(){
		return(
		<div>
			{
				this.props.shoes.map((item) =>{
					return (<Shoe shoe={item}
						brand={item.brand}
						name={item.name}
						price={item.price}
						key ={item.id} ></Shoe>)
					
				})
			}
		</div>
		)
	}
}

ShoeList.propTypes = {
  shoes: React.PropTypes.array.isRequired,
  onShoeSelect: React.PropTypes.func
};

export default ShoeList;