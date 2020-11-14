import React from 'react'

import ActorCard from "./ActorCard/ActorCard";
import { SimpleGrid } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"

class ActorGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { actors } = this.props

        if (!actors) return null

        return (
            <VStack spacing={8} css={{ marginTop: '50px', width: '100%', paddingLeft: '30px', paddingRight: '30px' }}>
                { actors.map((actor, i) => <ActorCard key={i} actor={actor} />) }
            </VStack>
        )

        return (
            <SimpleGrid spacing={10} columns={{sm: 2, md: 3}} css={{ marginTop: '50px' }}>
                { actors.map((actor, i) => <ActorCard key={i} actor={actor} />) }
            </SimpleGrid>
        )
    }
}

export default ActorGrid