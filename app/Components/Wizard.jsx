import React, { Component, PropTypes } from 'react';

export default class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0
        };
        this.stepCount =  this.props.steps.length;
        this.hidden = {
            display: 'none'
        }
    }

    renderNames(i) {
        return this.props.steps[i].name
    }

    isFinalStep() {
        return this.stepCount === this.state.currentStep;
    }

    handleBack() {
        this.setState({ currentStep: this.state.currentStep - 1 })
    }

    handleNext() {
        this.setState({ currentStep: this.state.currentStep + 1 })
    }

    render() {
        return (
            <div>
                { this.props.steps[this.state.currentStep].component }

                <button onClick={ this.handleBack.bind(this) } style={ this.state.currentStep > 0 ? {} : this.hidden }>Back</button>
                <button onClick={ this.handleNext.bind(this) } style={ this.isFinalStep() ? this.hidden : {} }>Next</button>
            </div>
        )
    }
}