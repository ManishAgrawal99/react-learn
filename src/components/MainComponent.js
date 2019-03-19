import React, { Component } from 'react';

import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Footer from './FooterComponent';



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
                
                <Header></Header>
                <Menu dishes = {this.state.dishes} onClick={(dish) => this.onDishSelect(dish)}/>
                <div className = "row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Main;
