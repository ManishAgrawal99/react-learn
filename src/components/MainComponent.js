import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

    constructor(props){
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish})
    }


    renderDish(dish) {
        if(dish != null){
            return(
                <DishDetail dish = {this.state.selectedDish}></DishDetail>
            )
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className = "container">
                        <NavbarBrand href="/">Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                
                <Menu dishes = {this.state.dishes} onClick={(dish) => this.onDishSelect(dish)}/>
                <div className = "row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Main;