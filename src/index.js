import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import App from './components/App'
import {createStore,applyMiddleware} from 'redux'
import Reducer from './reducers'
import thunk from 'redux-thunk'

ReactDOM.render(
<Provider store={createStore(Reducer,applyMiddleware(thunk))}>
<App/>
</Provider>
,document.getElementById('root'));