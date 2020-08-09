import React, { Component }from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponents'
import DishDetail from "./DishDetailComponent";
import {DISHES} from '../shared/dishes'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      SelectedDish: null
    };
  }

  onDishSelect(dishId){
    this.setState({
        selectedDish:dishId
    });
}

  render(){
    return (
      <div>
      <Navbar dark color= "primary">
        <div className="container">
           <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
         </div>
      </Navbar>
      <Menu dishes={this.state.dishes}
        onClick={(dishID)=>this.onDishSelect(dishID)}/>
      <DishDetail dish={
          this.state.dishes.filter((dish)=> dish.id === this.state.SelectedDish)[0]}/>
      </div>
    );
  }
}

export default Main;
