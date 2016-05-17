import React from 'react';
import { connect } from 'react-redux'
import Wizard from '../Components/Wizard';

const mapStateToProps = (state, ownProps) => {
    return {
        state,
        ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNextStep: () => {
            dispatch({ type: 'NEXT_STEP'})
        },
        onPrevStep: () => {
            dispatch({ type: 'PREV_STEP'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);