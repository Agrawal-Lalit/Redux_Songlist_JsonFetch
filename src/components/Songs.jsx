import React, { Component } from 'react'
import {connect} from 'react-redux'
import {SelectSong,AddSong, FetchSong} from '../actions'
import {Show}  from './Show';

const ref1=React.createRef(null);
const ref2=React.createRef(null);
class Songs extends Component {

    state={newSongName:'',newSongDesc:''};

    componentDidMount(){
        this.props.FetchSong({});
    }
    render() {
    return <div className="ui divided list">
        <h2 className="ui header">Add new Song</h2>
       Enter new Song Title <input ref={ref1} onChange={(e)=>this.setState({newSongName:e.target.value ,newSongDesc:this.state.newSongDesc})}/><br/>
       Little Description <input ref={ref2} onClick={(e)=>{this.setState({newSongName:this.state.newSongName ,newSongDesc:e.target.value});}}/><br/>
       <button className="ui button primary"
            onClick={()=>this.props.AddSong({name:this.state.newSongName,desc:this.state.newSongDesc})}
            >Add</button>


        <h2 className='ui header'>Current Songs</h2>
        {this.props.SongList.map(song =>{return (
        <div className="item" key={song.name}>
        <div className="right floated content">
            <button className="ui button primary"
            onClick={()=>this.props.SelectSong(song)} //neeche connect me action creator pass kiya h tabhi state m jaega par inspect
            //karne p dikha nhi rha h..waise to ye obj return kar rha h aur wo dispatch ho rha h to all reducers aur fir reducer apne return m 
            //apni state variable/info ko update kar rhe h us hisab se. aur state change fir mapStateToProps rerun ho rha h
            >Select</button>
        </div>
             <div className="content">{song.name}</div>
        </div>)})
        }
        <Show song={this.props.Fetcher}/>
   </div>
    }
}
const mapStateToProps=(state)=>{
    // console.log(state);
    return state   //whatever returned here will be assumed as props in here
}

export default connect(mapStateToProps,{SelectSong,AddSong,FetchSong})(Songs) 