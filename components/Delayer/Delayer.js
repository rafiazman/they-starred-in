import React from 'react'

class Delayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }

    componentDidMount() {
        const { delay } = this.props;

        setTimeout(() => this.setState({ show: true }), delay ? delay : 0);
    }

    render() {
        const { show } = this.state;
        const { children } = this.props;

        return show ? children : null;
    }
}

export default Delayer;