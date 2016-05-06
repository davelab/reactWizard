import React, { Component, PropTypes } from 'react';
import StatusBar from './StatusBar.jsx';

export default class Wizard extends Component {

    constructor(props) {
        super(props);
        this.stepCount =  this.props.steps.length;
        this.state = {
            currentStep: 1
        };

        this.hidden = {
            display: 'none'
        }
    }

    isFinalStep() {
        return this.stepCount === this.state.currentStep;
    }

    isFirstStep() {
        return this.state.currentStep === 1
    }

    handleBack() {
        this.setState({ currentStep: this.state.currentStep - 1 });
    }

    handleNext() {
        this.setState({ currentStep: this.state.currentStep + 1 });
    }

    render() {
        return (
            <div>
                { this.props.steps[this.state.currentStep - 1].component }
                { this.props.showStatusBar ? <StatusBar status={ this.state.currentStep } maxStatus={ this.stepCount } /> : '' }
                <button onClick={ this.handleBack.bind(this) } style={ this.isFirstStep() ? this.hidden: {} }>Back</button>
                <button onClick={ this.handleNext.bind(this) } style={ this.isFinalStep() ? this.hidden : {} }>Next</button>
            </div>
        )
    }
}

Wizard.defaultProps = {
    showStatusBar: true
}