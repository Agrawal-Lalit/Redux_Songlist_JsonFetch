//Reducer functions which manages their own state variables
//they all are called by single Redux.createStore.dispatch
//they return what they hold and update i.e. states
//we are using named export here because we have multiple reducer functions to export

import {combineReducers} from 'redux';

 const SongList =(listOfSongs=[{name:'Thoda Thoda pyar',desc:'aage bataoonga'}
                               ,{name:'Humnava mere ',desc:'Jubin ka gana'}
                               ,{name:'Dil Ibadat',desc:'Ye bhi h kuch'}],action)=>{
    if(action.type==='ADD_SONG')
    return [...listOfSongs, action.payload];
    return listOfSongs;
}

 const SelectedSong =(currentSong=null,action)=>{
    //currenSong should not be updated here directly instead whatever is returned in statement
    //below will directly updated the state i.e. currentSong
    if(action.type==='SELECTED_SONG')
    return action.payload;
    return currentSong;
}

export default combineReducers({
    SongList:SongList,
    SelectedSong:SelectedSong
});