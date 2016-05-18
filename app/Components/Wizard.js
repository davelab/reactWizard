import React, { PropTypes } from 'react';
import StatusBar from './StatusBar';
import Steps from './steps'

const Wizard = ( { wizardStep, onNextStep, onPrevStep } ) => {

    const stepCount =  Steps.length,
          hidden = {
                display: 'none'
          };

    this.isFinalStep = () => {
        return stepCount === wizardStep;
    }

    this.isFirstStep = () => {
        return wizardStep === 1
    }

    return (
        <div>
            { Steps[wizardStep - 1].component }
            <button onClick={ () => { onPrevStep() } } style={ this.isFirstStep() ? hidden : {} }>Back</button>
            <button onClick={ () => { onNextStep() } } style={ this.isFinalStep() ? hidden : {} }>Next</button>
        </div>
    )
}

Wizard.PropTypes = {
    wizardStep: PropTypes.number.isRequired,
    steps : PropTypes.array.isRequired,
    onNextStep : PropTypes.func.isRequired,
    onPrevStep : PropTypes.func.isRequired
}

export default Wizard;

