import { v4 as uuidv4 } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    characters: [
        { id: uuidv4(), name: 'Naruto' },
        { id: uuidv4(), name: 'Luffy' },
        { id: uuidv4(), name: 'Saitama'},
        { id: uuidv4(), name: 'Ichigo'}
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
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
            }
        default:
            return state;
    }
}
