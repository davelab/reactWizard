import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
// Components
import wizardContainer from './Containers/wizardContainer'
import { Steps } from './Components/steps'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <wizardContainer steps={ Steps } />
    </Provider>,
    document.getElementById('App')
);

