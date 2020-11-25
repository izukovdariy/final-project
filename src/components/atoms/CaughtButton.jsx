import React, {useState} from "react";
import {Button} from "react-bootstrap";

export function CaughtButton(props) {
    const [isCaught, setIsCaught] = useState(props.pokemon.isCaught);
    const onClick = () => {
        setIsCaught(true);
        props.catchPokemonHandle(props.pokemon);
    }
    return(
        <Button onClick={onClick} disabled={isCaught}>{isCaught ? 'Caught' : 'Catch'}</Button>
    )
}
