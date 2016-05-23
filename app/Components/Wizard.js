import React, { PropTypes } from 'react';
import StatusBarContainer  from './StatusBar';
import Steps from './steps'
import { connect } from 'react-redux'
import { nextStep, prevStep } from '../actions'
import '../scss/components/wizard.scss'


const Wizard = ( { currentStep, onNextStep, onPrevStep, statusBar } ) => {

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
        <div className="wizard">
            <div className="hp">
                { Steps[currentStep - 1].component }
            </div>
            { statusBar ?  <StatusBarContainer maxSteps={ maxSteps } /> : '' }
            <div className="hp">
                <button onClick={ () => { onPrevStep() } } style={ isFirstStep() ? hidden : {} } className="btn-back">Back</button>
                <button onClick={ () => { onNextStep() } } style={ isFinalStep() ? hidden : {} } className="btn-next">Next</button>
            </div>
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



