import React from 'react';
import { connect } from 'react-redux'
import { nextStep, prevStep } from '../actions'
import Wizard from '../Components/Wizard'

const mapStateToProps = (state) => {
    return {
        wizardStep: state.wizard
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

const wizardContainer = connect(mapStateToProps, mapDispatchToProps)(Wizard);

export default wizardContainer;



