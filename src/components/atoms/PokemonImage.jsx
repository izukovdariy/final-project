import React from "react";

export function PokemonImage(props) {
    let src = '';
   try {
        src = require(`../../../pokemons/${props.id}.png`).default;
    } catch (e) {
        src = require(`../../../pokemons/pngwing.com.png`).default;
    }
    return(
        <img src={src} alt={props.name} width={props.width}/>
    )
}

