
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
    characters: [ ], 
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                characters: action.payload,
                laoding: false
            };
        case DELETE_ITEM:
            return {
                ...state,
                characters: state.characters.filter(character => character.id !== action.payload)
            };
        case ADD_ITEM:
            return{
                ...state,
                characters: [action.payload, ...state.characters]
            };
        case ITEMS_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
