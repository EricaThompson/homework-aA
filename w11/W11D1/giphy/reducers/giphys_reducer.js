import { RECEIVE_SEARCH_GIPHYS } from '../actions/giphy_actions';

const giphysReducer = (state, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_SEARCH_GIPHYS:
            nextState = action.giphys ;
            return nextState;
        default:
            return state;
    }

}