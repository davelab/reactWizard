import React from 'react'
import { connect } from 'react-redux'
import '../scss/components/statusbar.scss'

const StatusBar = ( { currentStep, maxSteps } ) => {

    const style = { width : (currentStep / maxSteps  * 100) + '%' }

    return (
        <div className="status-bar-wrapper">
            <div style={ style } ></div>
        </div>
    )

}

const mapStateToProps = (state, ownProps) => {
    return {
        currentStep: state.wizard,
        maxSteps: ownProps.maxSteps
    }
}

const StatusBarContainer = connect(mapStateToProps)(StatusBar)

export default StatusBarContainer;