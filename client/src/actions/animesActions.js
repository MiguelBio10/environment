import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading()); // Signal loading state
    axios.get('./api/anime')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
        .catch(error => console.error(error)); // Handle potential errors
};

export const deleteItem = id => {
    return{
        type: DELETE_ITEM,
        payload: id
    };
};

export const addItem = Animes => {
    return{
        type: ADD_ITEM,
        payload: Animes
    };
};

export const setItemsLoading = () =>{
    return{
        type:ITEMS_LOADING
    }
}