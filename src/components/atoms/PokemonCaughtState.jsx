import React from "react";

export function PokemonCaughtState(props) {
    return(
        <div>
            {props.isCaught ? `caughted in ${props.date}` : `not caughted`}
        </div>
    )
}
