import React from "react";
import {PokemonCard} from "../molekules/PokemonCard";
import {useSelector} from "react-redux";
import {CardDeck, Container} from "react-bootstrap";

export function CaughtPokemonsList() {
    const caughtPokemonsArray = useSelector(state => state.caughtPokemonsArray);
    return(
        <Container className="container-fluid p-0 text-center">
            <CardDeck className='d-flex justify-content-center mb-5 mt-5'>
                {caughtPokemonsArray.map((pokemon, index) => (
                    <h5 key={index}>
                        <PokemonCard pokemon={pokemon} index={pokemon.id}/>
                    </h5>
                ))}
            </CardDeck>
        </Container>
    )
}
