import React, {useCallback, useEffect} from "react";
import {PokemonCard} from "../molekules/PokemonCard";
import {useDispatch, useSelector} from "react-redux";
import {catchPokemon, getPokemons, nextPage} from "../../actions/actions";
import {LoadIcon} from "../atoms/LoadIcon";
import {CardDeck, Container,Button} from "react-bootstrap";

export function PokemonsList() {
    const pokemonsArray = useSelector(state => state.pokemonsArray);
    const isFetching = useSelector(state => state.isFetching);
    const isLastPage = useSelector(state => state.lastPage);
    const dispatch = useDispatch();
    useEffect(() => dispatch(getPokemons()),[]);
    const loadMoreHandle = () => {
        dispatch(nextPage());
        dispatch(getPokemons());
    };
    const catchPokemonHandle = useCallback((pokemon) => {
        dispatch(catchPokemon(pokemon));
    }, [dispatch]);
    if (isFetching) return (<LoadIcon/>)
    else
   return(
       <Container className="container-fluid p-0 text-center">
           <CardDeck className='d-flex justify-content-center mb-5 mt-5'>
               {pokemonsArray.map((pokemon, index) => (
                   <h5 key={pokemon.id}>
                           <PokemonCard pokemon={pokemon} index={index + 1} catchPokemonHandle={catchPokemonHandle}/>
                   </h5>
               ))}
           </CardDeck>
           {!isLastPage &&
           <Button onClick={loadMoreHandle} variant="primary" size="lg" disabled={isLastPage}>
               Load More
           </Button>
           }
       </Container>
    )

}
