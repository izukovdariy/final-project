import {
    CATCH_POKEMON,
    GET_POKEMONS_FAIL,
    GET_POKEMONS_REQUEST,
    GET_POKEMONS_SUCCESS, NEXT_PAGE
} from '../actions/actions'

const initialState = {
    pokemonsArray: [],
    caughtPokemonsArray: [],
    page: 1,
    isLoadMore: false,
    isFetching: false,
    lastPage: false,
    error: '',
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS_REQUEST:
            return {...state, isFetching: true, error: ''}
        case GET_POKEMONS_SUCCESS:
            return {...state,
                    pokemonsArray: (state.isLoadMore || state.pokemonsArray.length === 0) ? state.pokemonsArray.concat(action.payload) : state.pokemonsArray,
                    isFetching: false,
                    isLoadMore: false,
                    lastPage : (action.payload.length === 0),
                    pokemonsToLoad: action.payload}
        case GET_POKEMONS_FAIL:
            return {...state, isFetching: false, error: action.payload}
        case NEXT_PAGE:
            return {...state, page: state.page + 1, isLoadMore: true}
        case CATCH_POKEMON:
            state.pokemonsArray[action.payload.id-1].isCaught = true;
            state.pokemonsArray[action.payload.id-1].caughtDate = action.payload.caughtDate;
            return {...state,
                    caughtPokemonsArray: state.caughtPokemonsArray.concat(action.payload)}
        default :
            return state
    }
}
