import 'babel-polyfill';
export const GET_POKEMONS_REQUEST = 'GET_POKEMONS_REQUEST';
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
export const GET_POKEMONS_FAIL = 'GET_POKEMONS_FAIL';
export function getPokemons() {
    return (dispatch, getState) => {
        dispatch({
            type: GET_POKEMONS_REQUEST
        })
        return fetch(`http://localhost:3000/pokemons?_page=${getState().page}`)
            .then(response => (response.json()))
            .then(data => dispatch({
                    type: GET_POKEMONS_SUCCESS,
                    payload: data
                    }))
            .catch(error => dispatch({
                type: GET_POKEMONS_FAIL,
                payload: error.message
            }))
    }
}

export const NEXT_PAGE = 'NEXT_PAGE';
export function nextPage() {
    return {
        type: NEXT_PAGE,
    }
}

export const CATCH_POKEMON = 'CATCH_POKEMON';
export function catchPokemon(pokemon) {
    const date = new Date();
    pokemon.isCaught = true;
    pokemon.caughtDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
    return({ type: CATCH_POKEMON, payload: pokemon})
}

