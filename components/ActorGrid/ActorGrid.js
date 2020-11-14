import React from 'react'
import ActorCard from "./ActorCard/ActorCard";

class ActorGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { actors } = this.props

        return (
            <>
                { actors.map((actor, i) => <ActorCard key={i} actor={actor} />) }
            </>
        );
    }
}

export default ActorGrid