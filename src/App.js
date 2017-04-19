import React from 'react';
import NavBar from './components/NavBar';
import Api from './api/index'
import ShoeList from './components/ShoeList'
import CartSummary from './components/CartSummary'
import Facet from './components/Facet'

class App extends React.Component {

 constructor(props) {
  super(props)
  this.state = {shoes:[], cart:[],facetSelected:null}
  this.handleShoeSelect = this.handleShoeSelect.bind(this)
}

componentDidMount() {

  new Promise((resolve,reject) =>{
      resolve(Api.getShoes())
    }).then((shoes) =>{
      this.setState({
        shoes:shoes  
      })
    })
}

handleShoeSelect (shoe) {
 this.setState({cart: this.state.cart.concat([shoe])});

}

handleFacetSelect(facet,facetSelected){
  const filteredFacet = this.state.facetSelected.filter(facet)
  this.setState({
    facetSelected:[filteredFacet]
  })
}

render() {
  return (
    <div>

        <NavBar title="Shoe App Store"/>

        <div className="row">

          

          <div className="col s6">
            <ShoeList shoes={this.state.shoes} onShoeSelect={this.handleShoeSelect}/>
          </div>

          <div className="col s3">
            <CartSummary cart={this.state.cart} />
          </div>

        </div>

         

      </div>
    );
  }
}

export default App;