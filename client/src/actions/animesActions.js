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

export const addItem = Animes => dispatch =>{
   axios
    .post ('./api/anime', Animes)
    .then (res => 
        dispatch({
        type: ADD_ITEM,
        payload: res.data
        })
        )
   

};

export const deleteItem = id => dispatch => {
 axios.delete(`/api/anime/${id}`).then(res =>
    dispatch({
        type:DELETE_ITEM,
        payload: id
    })
    )
};



export const setItemsLoading = () =>{
    return{
        type:ITEMS_LOADING
    }
}