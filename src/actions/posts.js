import * as api from '../api';

//action creators are function that return an  action(objects that has type and payload)
export const getPosts =()=>async(dispatch)=>{
    try {
        const {data} =await api.fetchPosts();//fetching data from backend
        dispatch({type:'FETCH_ALL',payload:data});
    } catch (error) {
        console.log(error.message);
    }
    const action ={type:'FETCH_ALL',payload:[]}
    dispatch(action);
}

export const createPost=(post) => async(dispatch) =>{
    try {
        const {data} =await api.createPost(post);

        dispatch({type:'CREATE', pauload: data});
    } catch (error) {
        console.log(error);
    }
}