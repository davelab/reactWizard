import React from 'react';
import Wizard from './Wizard';
import { Steps } from './steps/index';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <Wizard steps={ Steps } />
            </div>
            );
    }
}
