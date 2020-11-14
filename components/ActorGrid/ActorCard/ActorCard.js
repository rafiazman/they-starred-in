import React from 'react'

import { Box } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import MovieCard from "./MovieCard/MovieCard";

class ActorCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { actor } = this.props
        const movies = actor.known_for

        return (
            <Box w="100%" borderWidth="1px" borderRadius="lg" p={4}>
                <Heading css={{ marginBottom: '20px' }}>{ actor.name }</Heading>
                <HStack spacing={4} justify="space-between">
                    { movies.map((movie, i) => <MovieCard key={i} movie={movie} />) }
                </HStack>
            </Box>
        );
    }
}

export default ActorCard