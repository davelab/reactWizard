import React from 'react';
import Wizard from './Wizard.jsx';
import { Steps } from './steps/index.jsx';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <Wizard steps={ Steps } />
            </div>
            );
    }
}
