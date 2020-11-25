import React from "react";
import {PokemonImage} from "../atoms/PokemonImage";
import {PokemonName} from "../atoms/PokemonName";
import {PokemonId} from "../atoms/PokemonId";
import {PokemonCaughtState} from "../atoms/PokemonCaughtState";
import {useSelector} from "react-redux";
import {Container} from "react-bootstrap";

export function PokemonPage({match}) {
    const {params: {id}} = match;
    const pokemon = useSelector(state => state.pokemonsArray[id-1]);
    const pokemonName = pokemon.name;
    const pokemonId = pokemon.id;
    const isCaught = pokemon.isCaught  ;
    const caughtDate = pokemon.caughtDate;
    return(
        <Container className='text-center justify-content-center ' >
            <Container className='border' style={{fontSize: '20px'}}>
                <PokemonImage name={pokemonName} id={pokemonId} width={400}/>
                <PokemonId id={pokemonId}/>
                <PokemonName name={pokemonName}/>
                <PokemonCaughtState isCaught={isCaught} date={caughtDate}/>
            </Container>
        </Container>
    )
}

