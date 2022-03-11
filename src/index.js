import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import App from './components/App'
import {createStore,applyMiddleware,compose} from 'redux'
import Reducer from './reducers'
import thunk from 'redux-thunk'


//debug session on karne k liye
//localhost:3000/?debug_session="lakjsdfjslfajfld"
//it will save state history upon refreshing the browser


const composeEnhancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
ReactDOM.render(
<Provider store={createStore(Reducer,composeEnhancer(applyMiddleware(thunk)))}>
<App/>
</Provider>
,document.getElementById('root'));