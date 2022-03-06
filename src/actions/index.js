//Action creator files where action objects == > analogy forms are cerated
//structure of actionObjects == {type,payload}
//type : what kind of action to take on an object
//payload: can be any array,obj etc upon which some action has to take
// takes some arguments and returns object

import axios from 'axios'
export const SelectSong=(songObj)=>{

    return {
        type:'SELECTED_SONG',
        payload:songObj,
    };
} 
export const AddSong =(songObj)=>{
    return {
        type:'ADD_SONG',
        payload:songObj
    }
}

export const FetchSong= () => async dispatch =>{
    const  response= await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({type:'FETCH_DATA',payload:response});
    }