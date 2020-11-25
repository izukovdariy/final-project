import React from "react";
import {PokemonImage} from "../atoms/PokemonImage";
import {PokemonName} from "../atoms/PokemonName";
import {CaughtButton} from "../atoms/CaughtButton";
import {Link} from "react-router-dom";
import {Card, Container} from "react-bootstrap";

export const PokemonCard = (props) => {
    const pokemon = props.pokemon;
    return(
        <Card>
            <Container as={Link} to={`/pokemon/${props.index}`} style={{ textDecoration: 'none', padding: 0}}>
                <div style={{ textAlign: 'center'}}>
                    <PokemonImage name={pokemon.name} id={pokemon.id} width={200}/>
                    <PokemonName name={pokemon.name}/>
                </div>
            </Container>
            <CaughtButton pokemon={pokemon} catchPokemonHandle={props.catchPokemonHandle}/>
        </Card>
)
}

