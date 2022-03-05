//Action creator files where action objects == > analogy forms are cerated
//structure of actionObjects == {type,payload}
//type : what kind of action to take on an object
//payload: can be any array,obj etc upon which some action has to take
// takes some arguments and returns object

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
