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
                <Heading>{ actor.name }</Heading>

                <HStack spacing={4} justify="space-between" css={{ marginTop: '20px'}}>
                    { movies.map(movie => <MovieCard key={movie.id} movie={movie} />) }
                </HStack>
            </Box>
        );
    }
}

export default ActorCard