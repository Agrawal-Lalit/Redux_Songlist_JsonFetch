
export const Show=({song})=> song.length ? <div>{song[`${Math.ceil(Math.random()*100)}`].body}</div>: null;
//ye middleware k through jaega aur promise dega as state
    // console.log(type);