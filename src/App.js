import React from 'react';
import NavBar from './components/NavBar';
import Method from './api/index'
import ShoeList from './components/ShoeList'
import CartSummary from './components/CartSummary'
import Facet from './components/Facet'

class App extends React.Component {

 constructor(props) {
  super(props)
  this.state = {shoes:[], cart:[],facetSelected:null}
}

componentDidMount() {
  let shoes =[]
  Method.getShoes().then((Shoe) => {
   for (var i = 0; i < Shoe.length; i++) {
    shoes.push({Id:Shoe[i].id,
      brand:Shoe[i].brand,
      name:Shoe[i].name,
      price:Shoe[i].price})
  } 
  this.setState({shoes: shoes})
})
}

handleShoeSelect (shoe,cart) {
  this.setState({cart: this.state.cart.concat([shoe])});

}


render() {
  return (
    <div>

    <NavBar title="My App Store"/>
    <div className="row">
    <div className="col s6">
    <ShoeList shoes={this.state.shoes} 
    onShoeSelect={this.handleShoeSelect}>

    </ShoeList >
    </div>

    <div className="col s3">
    <CartSummary cart={this.state.cart} >
    </CartSummary>

    <Facet items={this.state.shoes} onFacetSelect={this.handleFacetSelect} />
    </div>
    </div>
    </div>
    );
  }
}

export default App;