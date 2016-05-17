import React, { Component, PropTypes } from 'react';
import StatusBar from './StatusBar';

export default class Wizard extends Component {

    constructor(props, context) {
        super(props, context);
        this.stepCount =  this.props.steps.length;

        this.hidden = {
            display: 'none'
        }
    }

    isFinalStep() {
        return this.stepCount === this.state;
    }

    isFirstStep() {
        return this.state === 1
    }

    handleBack() {
        this.props.action.onPrevStep()
    }

    handleNext() {
        this.props.action.onNextStep()
    }

    render() {
        return (
            <div>
                { this.props.steps[this.state - 1].component }
                { this.props.showStatusBar ? <StatusBar status={ this.state } maxStatus={ this.stepCount } /> : '' }
                <button onClick={ this.handleBack.bind(this) } style={ this.isFirstStep() ? this.hidden: {} }>Back</button>
                <button onClick={ this.handleNext.bind(this) } style={ this.isFinalStep() ? this.hidden : {} }>Next</button>
            </div>
        )
    }
}

Wizard.defaultProps = {
    showStatusBar: false
}