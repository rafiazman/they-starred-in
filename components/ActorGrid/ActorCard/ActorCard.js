import React from 'react'

class ActorCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { actor } = this.props

        return (
            <div>
                { JSON.stringify(actor) }
            </div>
        );
    }
}

export default ActorCard