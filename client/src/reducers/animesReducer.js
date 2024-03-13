import { v4 as uuidv4 } from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from '../actions/types';
const initialState = {
    character: [
        { id: uuidv4(), name: 'Naruto' },
        { id: uuidv4(), name: 'Luffy' },
        { id: uuidv4(), name: 'Saitama'},
        { id: uuidv4(), name: 'Ichigo'}
    ]
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            }
            default:
                return state;

    }
}