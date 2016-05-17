import React, { Component, PropTypes } from 'react';
import '../scss/components/statusbar.scss';

export default class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusBar: this.percentageStatus(this.props.status)
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ statusBar: this.percentageStatus(nextProps.status) });
    }

    percentageStatus(status) {
        return  status / this.props.maxStatus  * 100;
    }

    render() {
        this.style = {
            width : this.state.statusBar + '%'
        }
        return (
            <div className="status-bar-wrapper">
                <div style={ this.style } ></div>
            </div>

        )
    }
}