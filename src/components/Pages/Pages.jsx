import React from 'react'
import Header from "../common/header/Header";
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "../home/Home";
import Dish from "../Dish/Dish";
import Ingredient from "../Ingredient/Ingredient";
import Recipe from "../Recipe/Recipe";
import Sharing from "../Sharing/Sharing";
import Favorite from "../Favorite/Favorite";
const Pages = () => {
    return (
        <>

            <Router>
                <Header />

                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/Dish' component={Dish}/>
                        <Route exact path='/Ingredient' component={Ingredient}/>
                        <Route exact path='/Recipe' component={Recipe}/>
                        <Route exact path='/Sharing' component={Sharing}/>
                        <Route exact path='/Favorite' component={Favorite}/>
                    </Switch>
            </Router>
        </>
    )
}
export default Pages