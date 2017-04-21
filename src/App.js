import React from 'react';
import NavBar from './components/NavBar';
import Api from './api/index'
import ShoeList from './components/ShoeList'
import CartSummary from './components/CartSummary'
import Facet from './components/Facet'

class App extends React.Component {

 constructor(props) {
  super(props)
  this.state = {shoes:[], cart:[],facetSelected:[]}
  this.handleShoeSelect = this.handleShoeSelect.bind(this)
  this.handleFacetSelect = this.handleFacetSelect.bind(this)
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
  this.state.cart.push(shoe)
  this.setState({cart: this.state.cart});
}

handleFacetSelect(facet){
  //console.log( this.state.facetSelected)
  // const filteredFacet = this.state.facetSelected.filter(facet)
  // this.setState({
  //    facetSelected:[filteredFacet]
  //  })
}

render() {
  return (
    <div>

        <NavBar title="Shoe App Store"/>
        <div className="row">

           <div className="col s3">
          </div>

          <div className="col s6">
            <ShoeList shoes={this.state.shoes} onShoeSelect={this.handleShoeSelect}/>
          </div>

          <div className="col s3">
           <div className="row"><CartSummary cart={this.state.cart} /></div> 
           <div className="row"> <Facet items={this.state.cart}  onFacetSelect={this.handleFacetSelect}  /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;