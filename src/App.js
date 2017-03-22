import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ShoeList from './components/ShoeList'
import CartSummary from './components/CartSummary'
import Api from './api';

class App extends Component {

  /**
   * TIP:
   *  - this.state = {...}
   *  - this.someFunction = this.someFunction.bind(this)
   * */
  constructor(props) {
    super(props);
    this.state ={shoes:[], cart:[]}
  }

  /**
   * TIP:
   *  - Api.getShoes() returns a promise
   *  - this.setState() might be useful
   * */
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

        <NavBar title="Hello World"/>

        <div className="row">

          <div className="col s3">
            I am the left pane
          </div>

          <div className="col s6">
            <ShoeList shoes={this.state.shoes}
            onShoeSelect={this.handleShoeSelect}/>
          </div>

          <div className="col s3">
            <CartSummary cart={this.state.cart}>
            </CartSummary>
          </div>

        </div>
      </div>

    );
  }
}

export default App;
