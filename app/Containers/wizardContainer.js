import React from 'react';
import { connect } from 'react-redux'
import { nextStep, prevStep } from '../actions'
import Wizard from '../Components/Wizard'

const mapStateToProps = (state) => {
    return {
        currentStatus: state.wizard
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



