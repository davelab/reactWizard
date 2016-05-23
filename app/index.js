import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import wizardReducer from './reducers'
import { Provider } from 'react-redux'
import './scss/global.scss'

// Components
import WizardContainer from './Components/Wizard'

const store = createStore(wizardReducer, window.devToolsExtension ? window.devToolsExtension() : undefined);

ReactDOM.render(
    <Provider store={ store }>
        <WizardContainer statusBar={ false } />
    </Provider>,
    document.getElementById('App')
);

