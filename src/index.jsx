import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, Switch} from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";
import store from "./store/store";
import {Provider} from "react-redux";
import {PokemonPage} from "./components/organisms/PokemonPage";
import {PokemonsList} from "./components/organisms/PokemonsList";
import {CaughtPokemonsList} from "./components/organisms/CaughtPokemonsList";
import {Navbar, Nav} from "react-bootstrap";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Navbar bg="light" expand="lg sm md xl">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Pokemons</Nav.Link>
                    <Nav.Link as={Link} to="/caught">Caught Pokemons</Nav.Link>
                </Nav>
            </Navbar>
            <Switch>
                <Route exact path="/" component={PokemonsList}/>
                <Route exact path="/caught" component={CaughtPokemonsList}/>
                <Route exact path="/pokemon/:id" component={PokemonPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);

