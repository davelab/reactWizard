import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import wizardReducer from './reducers'
import { Provider } from 'react-redux'

// Components
import WizardContainer from './Containers/WizardContainer'

const store = createStore(wizardReducer, window.devToolsExtension ? window.devToolsExtension() : undefined);

ReactDOM.render(
    <Provider store={ store }>
        <WizardContainer />
    </Provider>,
    document.getElementById('App')
);

