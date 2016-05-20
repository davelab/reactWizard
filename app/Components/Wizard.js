import React, { PropTypes } from 'react';
import StatusBarContainer  from './StatusBar';
import Steps from './steps'
import { connect } from 'react-redux'
import { nextStep, prevStep } from '../actions'

const Wizard = ( { currentStep, onNextStep, onPrevStep, statusBar} ) => {

    const maxSteps =  Steps.length,
          hidden = {
                display: 'none'
          };

    const isFinalStep = () => {
        return maxSteps === currentStep;
    }

    const isFirstStep = () => {
        return currentStep === 1
    }

    return (
        <div>
            { Steps[currentStep - 1].component }
            { statusBar ?  <StatusBarContainer maxSteps={ maxSteps } /> : '' }
            <button onClick={ () => { onPrevStep() } } style={ isFirstStep() ? hidden : {} }>Back</button>
            <button onClick={ () => { onNextStep() } } style={ isFinalStep() ? hidden : {} }>Next</button>
        </div>
    )
}

Wizard.PropTypes = {
    wizardStep: PropTypes.number.isRequired,
    steps : PropTypes.array.isRequired,
    onNextStep : PropTypes.func.isRequired,
    onPrevStep : PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentStep: state.wizard,
        statusBar: ownProps.statusBar || true
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNextStep: () => {
            dispatch(nextStep())
        },
        onPrevStep: () => {
            dispatch(prevStep())
        }
    }
}

const WizardContainer = connect(mapStateToProps, mapDispatchToProps)(Wizard);

export default WizardContainer;



