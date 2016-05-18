import React, { PropTypes } from 'react';
import StatusBar from './StatusBar';
import Steps from './steps'

const Wizard = ( { currentStatus, onNextStep, onPrevStep } ) => {

    const stepCount =  Steps.length,
          hidden = {
                display: 'none'
          };

    const isFinalStep = () => {
        return stepCount === currentStatus;
    }

    const isFirstStep = () => {
        return currentStatus === 1
    }

    return (
        <div>
            { Steps[currentStatus - 1].component }
            <StatusBar currentStatus={ currentStatus } maxStatus={ stepCount } />
            <button onClick={ () => { onPrevStep() } } style={ isFirstStep() ? hidden : {} }>Back</button>
            <button onClick={ () => { onNextStep() } } style={ isFinalStep() ? hidden : {} }>Next</button>
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

