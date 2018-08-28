import React, { Component, PropTypes } from 'react';

class LoadingDot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            frame: 1
        };
    }

    componentWillMount() {
        clearInterval(this.interval);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ // eslint-disable-line react/no-did-mount-set-state
                frame: this.state.frame + 1
            });
        }, this.props.interval);
    }

    render() {
        let dd = this.state.frame % (this.props.dots + 1);
        let text = '';
        while (dd > 0) {
            text += '.';
            dd--;
        }
        return (
            <span {...this.props}>{text}&nbsp;</span>
        );
    }
}

LoadingDot.defaultProps = {
    interval: 300,
    dots: 3
};

LoadingDot.propTypes = {
    interval: PropTypes.number,
    dots: PropTypes.number
};

export default LoadingDot;