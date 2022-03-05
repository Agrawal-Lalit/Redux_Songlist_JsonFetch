import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import App from './components/App'
import {createStore} from 'redux'
import Reducer from './reducers'

ReactDOM.render(
<Provider store={createStore(Reducer)}>
<App/>
</Provider>
,document.getElementById('root'));